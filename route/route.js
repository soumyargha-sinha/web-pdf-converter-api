const express = require('express');
const router = express.Router();
const pdfRoutes = require('./pdf.route');
router.use('/pdf', pdfRoutes);

module.exports = router;