var http = require('http');
var express = require("express");

var app = express();

var controllers = require('./controllers');

//app.get("/", function (req, res) {
//    res.send({ name: "Primavera Services" })
//});


controllers.init(app);

var server = http.createServer(app);

server.listen(36500);