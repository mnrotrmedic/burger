var connection = require("./connection");

var orm = {
    selectAll: function (tableInput) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function (burger_name) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (??, false)";
        connection.query(queryString, [burger_name], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function (devoured, id) {
        var queryString = "UPDATE burgers SET devoured = ?? WHERE ID = ??";
        connection.query(queryString, [devoured, id], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
};

module.exports = orm;