const express = require('express');
const { validatePageSize, validateUrl } = require('./../middleware/validRequest.middleware');
const router = express.Router();
const pdfController = require('./../controller/pdf.controller');

router.post('/generate', validateUrl, validatePageSize, pdfController.fetchPdfFromUrl);

module.exports = router;