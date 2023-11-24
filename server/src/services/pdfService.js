const { simplifyText } = require('./openaiService');
const fs = require('fs');
const util = require('util');
const unlinkFile = util.promisify(fs.unlink);

exports.handlePdfUpload = async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  try {
    // Here you would parse the PDF and extract the text
    const text = '...'; // Placeholder for extracted text
    const simplifiedText = await simplifyText(text);

    // Delete the uploaded file after processing
    await unlinkFile(req.file.path);

    res.json({ simplifiedText });
  } catch (error) {
    console.error('Error processing PDF:', error);
    res.status(500).send('Error processing PDF.');
  }
};
