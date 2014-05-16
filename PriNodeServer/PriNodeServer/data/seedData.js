    (function (orders) {
        orders.initialOrdersByCompany = [
            {
                company: "Default",
                value: 5001245
            },
            {
                company: "Demo",
                value: 101245
            }
        ];

        orders.initialOrdersByCompanyYear = [
            {
                company: "Default",
                year: 2013,
                value: 3000000
            },
            {
                company: "Default",
                year: 2014,
                value: 2001245
            },
            {
                company: "Demo",
                year: 2013,
                value: 100000
            },
            {
                company: "Demo",
                year: 2014,
                value: 1245
            },
        ];

        orders.test = [
           {
               name: "History2",
               notes: [{
                   note: "Testes notas",
                   author: "Miguel Dias"
               }]
           }]
})(module.exports);