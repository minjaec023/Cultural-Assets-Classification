var express = require('express');
var http = require('http');
var ejs = require('ejs');
var static = require('serve-static');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.set('port', 5001);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('../project'));

var router = require('./router.js');
app.use('/', router);

http.createServer(app).listen(app.get('port'), function(){
    console.log("express start : %d ", app.get('port'));
});