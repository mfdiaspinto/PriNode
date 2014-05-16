    (function (homeController) {

        var data = require('../data/data');

        homeController.init = function (app) {
            app.get("/", function (req, res) {
                res.send({ name: "Primavera Services" })
            });

            app.get("/netsales/:company", function (req, res) {
                var company = req.params.company;
                if (company == "Demo") {
                    res.send({ value: 10000 });
                }
                else {
                    res.send({ value: 99999 });
                }
            });

            app.get("/orders", function (req, res) {
                data.getOrdersByCompany(function (err, results) {
                    res.send(results);
                });
            });
        };
})(module.exports);