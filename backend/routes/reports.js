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

router.get("/excess-report", (req, res) => { //REQ NOT BEING READ
    // Assuming you have a generateExcessReport function in your Report module
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;

    Report.generateExcessReport((error, excessReportData) => {
        if (error) {
            res.status(500).json({ error: "Error generating excess report" });
        } else {
            res.json(excessReportData);
        }
    });
});

router.get("/restock-report", (res) => {//REQ NOT BEING READ
    // Assuming you have a generateExcessReport function in your Report module
    Report.generateRestockReport((error, restockReportData) => {
        if (error) {
            res.status(500).json({ error: "Error generating restock report" });
        } else {
            res.json(restockReportData);
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
            res.json(sellsTogetherData);
        }
    });
});

module.exports = router;