var connection = require("./connection");

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
};


function objToSql(ob) {//function to convert object key/value pairs to SQL syntax
    var arr = [];

    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }

            arr.push(key + "=" + value);
        }
    }

    return arr.toString();
}

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