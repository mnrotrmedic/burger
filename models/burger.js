const orm = require("../config/orm");

var burger = {
    all: function (callback) { //Get all burgers from the database
        orm.selectAll("burgers", function (result) {
            callback(result);
        }
        )
    },

    create: function (cols, vals, callback) { //Add a new burger to the database
        orm.insertOne("burgers", cols, vals, function (result) {
            callback(result)
        })
    },

    // update: function(objColVals, condition)
}

module.exports = burger;