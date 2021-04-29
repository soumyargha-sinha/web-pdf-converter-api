const pdfService = require('./../service/pdf.service.js');

const fetchPdfFromUrl = async(req, res, next) => {
    try {
        console.log(req.body)
        const pdf = await pdfService.fetchPdfFromUrl(req.body.url, req.body.pageSize);
        res.set({ 'Content-Type': 'application/pdf', 'Content-Length': pdf.length });
        res.status(201).send(pdf);
    } catch {
        res.status(400).send({ 'error': 'Could not fetch PDF from the URL.' });
    }
};

module.exports = { fetchPdfFromUrl }