var mysql = require("mysql");


//Connection to mysql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root", //super secure :\
    database: "burgers_db"
});

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "fnx6frzmhxw45qcb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "akj9x5xqomjtsg4x",
        password: "jo6xjypdw7x8taib",
        database: "fguh24ee4kqevej4"
    });
};

connection.connect(function (err) {
    if (err) {
        console.error("Oh no! Error Connecting: " + err.stack);
        return;
    }
    console.log("Huzzah! Connected as ID: " + connection.threadId);
});

module.exports = connection;
