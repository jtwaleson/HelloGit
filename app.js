var express = require('express');
var path = require('path');
var app = express();

app.configure(function () {
    app.set('port', 8080);
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'static')));
});

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(app.get('port'));
