const express = require('express');
const multer = require('multer');
const { handlePdfUpload } = require('../services/pdfService');

const router = express.Router();
const upload = multer({ dest: 'uploads/' }); // Configure as needed

router.post('/', upload.single('file'), handlePdfUpload);

module.exports = router;
