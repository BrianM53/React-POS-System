var express = require("express");
var router = express.Router();
const Report = require("../models/Report");

router.get("/", (req, res) => {
    res.send("reports route working");
});

// posting doesn't show anything, change to get to show 
router.post("/sales-report", (req, res) => {
    // const startDate = '2022-10-06 06:22:00';
    // const endDate = '2022-10-06 08:25:00';
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;

    Report.generateSalesReport(startDate, endDate, (error, salesReportData) => {
        if (error) {
            res.status(500).json({ error: "Error generating sales report" });
        } else {
            res.json(salesReportData);
        }
    });
});

router.get("/excess-report", (req, res) => {
    res.send("excess report data");
});

module.exports = router;