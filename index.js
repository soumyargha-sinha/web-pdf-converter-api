const express = require('express');
const app = express();
var routes = require('./route/route');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use('/', routes);
app.listen(3000, () => {
    console.log("Web Pdf Converter API is running on port 3000");
});