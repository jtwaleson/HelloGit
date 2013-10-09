var express = require('express');
var app = express();

app.configure(function () {
    app.set('port', 8080);
});

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(app.get('port'));
