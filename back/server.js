const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());





app.listen(5000, function () {
    console.log('Example app listening on port 5000!');
});
