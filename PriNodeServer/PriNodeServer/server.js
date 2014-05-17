var http = require('http');
var express = require("express");

var app = express();

<<<<<<< HEAD

app.get("/", function (req, res) {
    res.send({ name: "Primavera Services" })
});
=======
var controllers = require('./controllers');
>>>>>>> 8ecd3f31f2888604f51ccbcfe6dab20dcba7cced

//app.get("/", function (req, res) {
//    res.send({ name: "Primavera Services" })
//});

<<<<<<< HEAD
app.get("/netsales/:company", function (req, res) {
    var company = req.params.company;
    if (company == "Demo") {
        res.send({ value: 10000 });
    }
    else {
        res.send({ value: 91119 });
    }
});
=======
controllers.init(app);
>>>>>>> 8ecd3f31f2888604f51ccbcfe6dab20dcba7cced

var server = http.createServer(app);

server.listen(36500);