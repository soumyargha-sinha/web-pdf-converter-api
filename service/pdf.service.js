const puppeteer = require('puppeteer');

const fetchPdfFromUrl = async(url, pageSize) => {
    const headlessBrowser = await puppeteer.launch({ headless: true });
    const page = await headlessBrowser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0' });
    const outputPdf = await page.pdf({ format: pageSize });
    await headlessBrowser.close();
    return outputPdf;
}

module.exports = { fetchPdfFromUrl }