const fs = require('fs');
const util = require('util');
const unlinkFile = util.promisify(fs.unlink);
const pdfParse = require('pdf-parse');

exports.handlePdfUpload = async (req, res) => {
    console.log("Hello")
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    try {
        // Read the content of the PDF file
        const pdfBuffer = fs.readFileSync(req.file.path);
        console.log("1st step:", pdfBuffer)

        // Parse the PDF and extract the text
        const data = await pdfParse(pdfBuffer);
        const extractedText = data.text;
        console.log("2nd step:", data)
        console.log("3rd step:", extractedText)



        // Delete the uploaded file after processing
        await unlinkFile(req.file.path);
        // Send the extracted text back in the response
        res.json({ text: extractedText });
    } catch (error) {
        console.error('Error message:', error.message);
        console.error('Error stack:', error.stack);
        console.error('Error processing PDF:', error);

        // Ensure the uploaded file is deleted even if parsing fails
        if (req.file?.path) {
            await unlinkFile(req.file.path).catch((err) => console.error('Error deleting file:', err));
        }

        res.status(500).send('Error processing PDF.');
    }
};
