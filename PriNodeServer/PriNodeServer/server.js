var http = require('http');
var express = require("express");

var app = express();


app.get("/", function (req, res) {
    res.send({ name: "Primavera Services" })
});

app.get("/netsales", function (req, res) {
    res.send({ value: 120912 })
});

app.get("/netsales/:company", function (req, res) {
    var company = req.params.company;
    if (company == "Demo") {
        res.send({ value: 10000 });
    }
    else {
        res.send({ value: 91119 });
    }
});

var server = http.createServer(app);

server.listen(36500);