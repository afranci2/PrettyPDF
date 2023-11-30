const express = require('express');
const multer = require('multer');
const { handlePdfUpload } = require('../services/pdfService'); // make sure to export simplifyText
const {simplifyText} = require('../services/openaiService')

const router = express.Router();
const upload = multer({ dest: 'uploads/' }); // Configure as needed

router.post('/', upload.single('file'), async (req, res) => {
    try {
        // First handle the PDF upload
        const extractedText = await handlePdfUpload(req, res);

        // Then simplify the text using OpenAI
        const simplifiedText = await simplifyText(extractedText);
        console.log("This is OpenAI text: /n", simplifiedText)


        // Finally, send the simplified text back in the response
        res.json({ simplifiedText });
    } catch (error) {
        // Handle any errors
        console.error('Error in PDF upload or text simplification:', error);
        res.status(500).send('Error in PDF upload or text simplification.');
    }
});

module.exports = router;
