var express = require("express");
var router = express.Router();
const Product = require("../models/Products");

router.get("/", (req, res) => {
  res.send("reports route working");
});

module.exports = router;