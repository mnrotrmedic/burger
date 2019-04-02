const express = require("express");
const router = express.Router();
const burger = require("../models/burger")

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsData = {burger: data}
        res.render("index", hbsData);
    })
})



module.exports = router;