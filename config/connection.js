var mysql = require("mysql");


//Connection to mysql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root", //super secure :\
    database: "burgers_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("Oh no! Error Connecting: " + err.stack);
        return;
    }
    console.log("Huzzah! Connected as ID: " + connection.threadId);
});

module.exports = connection;
