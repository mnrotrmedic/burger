const express = require("express");
const router = express.Router();
const burger = require("../models/burger")

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsData = { burger: data }
        res.render("index", hbsData);
    })
}) //END GET Route

router.post("/api/burgers", function (req, res) {
    console.log(req.body);
    burger.create([
        "burger_name", "devoured"
    ], [
            req.body.burgerName, req.body.devoured
        ], function (result) {
            res.json(result);
        })
}) //END POST Route

router.put("/api/burgers/:id", function (req, res) {

    var condition = "id = " + req.params.id;

    console.log("condition", condition) //eaten id = 5
    console.log(typeof condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function (result) {
        console.log(result)
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
}) //END PUT Route





module.exports = router;