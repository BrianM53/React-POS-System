var express = require("express");
var router = express.Router();
const Report = require("../models/Report");


router.get("/", (res) => {
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
            res.json({data: salesReportData});
        }
    });
});


router.post("/excess-report", (req, res) => { 
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;

    Report.generateExcessReport(startDate, endDate, (error, excessReportData) => {
        if (error) {
            res.status(500).json({ error: "Error generating excess report" });
        } else {
            res.json({data: excessReportData});
        }
    });
});

router.post("/restock-report", (req, res) => { // Fix the parameter list
    // Assuming you have a generateExcessReport function in your Report module
    Report.generateRestockReport((error, restockReportData) => {
        if (error) {
            res.status(500).json({ error: "Error generating restock report" });
        } else {
            res.json({ data: restockReportData });
        }
    });
});


router.post("/sells-together", (req, res) => {
    // const startDate = '2022-10-06 06:22:00';
    // const endDate = '2022-10-06 08:25:00';
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;

    Report.generateSellsTogether(startDate, endDate, (error, sellsTogetherData) => {
        if (error) {
            res.status(500).json({ error: "Error generating sells together report" });
        } else {
            res.json({data: sellsTogetherData});
        }
    });
});

router.post("/usage-chart", (req, res) => {
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;

    Report.generateUsageChart(startDate, endDate, (error, usageChartData) => {
        if (error) {
            res.status(500).json({ error: "Error generating usage chart" });
        } else {
            res.json({ data: usageChartData });
        }
    });
});

module.exports = router;