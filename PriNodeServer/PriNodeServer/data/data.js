    (function (data) {
        var seedData = require('./seedData');

        data.getOrdersByCompany = function (next) {
        next(null, seedData.initialOrdersByCompany);
    };
})(module.exports);