var express = require("express");
var router = express.Router();
const Report = require("../models/Report");

router.get("/", (req, res) => {
    res.send("reports route working");
});

router.get("/sales-report", (req, res) => {
    // const startDate = ''

    // Report.generateSalesReport(, (error, products) => {
    //     if (error) {
    //       res.status(500).json({ error: "Error fetching products" });
    //     } else {
    //       res.json(products);
    //     }
    //   });
    res.send("sales report data");
});

router.get("/excess-report", (req, res) => {
    // const startDate = ''

    // SalesReport.generateSalesReport();

    // SalesReport.generateSalesReport(, (error, products) => {
    //     if (error) {
    //       res.status(500).json({ error: "Error fetching products" });
    //     } else {
    //       res.json(products);
    //     }
    //   });
    res.send("excess report data");
});

module.exports = router;