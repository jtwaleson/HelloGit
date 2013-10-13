var express = require('express');
var path = require('path');
var app = express();

app.configure(function () {
    app.set('port', 8080);
    app.use(express.compress());
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'static')));
});

app.get('/', function (req, res) {
    res.render('index', {time: Date()});
});

app.listen(app.get('port'));
