const { pageSizes } = require("../util/config");

const validatePageSize = (req, res, next) => {
    if (pageSizes.includes(String(req.body.pageSize).trim().toLowerCase())) {
        req.body.pageSize = String(req.body.pageSize).trim();
        next();
    } else if (!req.body.pageSize || req.body.pageSize.length == 0) {
        req.body.pageSize = 'a4';
        next();
    } else {
        res.status(400).send({ 'error': 'Invalid page size!' });
    }
}

const validateUrl = (req, res, next) => {
    if (String(req.body.url).length) {
        next();
    } else {
        res.status(400).send({ 'error': 'Invalid URL!' });
    }
}

module.exports = {
    validateUrl,
    validatePageSize
}