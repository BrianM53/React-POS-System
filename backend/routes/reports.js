var express = require("express");
var router = express.Router();
const Report = require("../models/Report");

const connection = require("../connection");

router.get("/", (req, res) => {
  res.send("reports route working");
});

router.post("/sales-report", (req, res) => {
  console.log("Received sales report request:", req.body);
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;

  Report.generateSalesReport(startDate, endDate, (error, salesReportData) => {
    if (error) {
      console.error("Error generating sales report:", error);
      res.status(500).json({ error: "Error generating sales report" });
    } else {
      console.log("Sending sales report data:", salesReportData);
      res.json({ data: salesReportData });
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
      res.json({ data: excessReportData });
    }
  });
});

router.post("/restock-report", (req, res) => {
  // Fix the parameter list
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

  Report.generateSellsTogether(
    startDate,
    endDate,
    (error, sellsTogetherData) => {
      if (error) {
        res
          .status(500)
          .json({ error: "Error generating sells together report" });
      } else {
        res.json({ data: sellsTogetherData });
      }
    }
  );
});

// router.post("/usage-chart", (req, res) => {
//     const startDate = '2022-08-06 06:22:00';
//     const endDate = '2023-10-06 08:25:00';
//     // const startDate = req.body.startDate;
//     // const endDate = req.body.endDate;
//     console.log("usage");
//     res.send("usage");
    
//     Report.generateUsageChart(startDate, endDate, (error, usageChartData) => {
//             if (error) {
//                     res.status(500).json({ error: "Error generating usage chart" });
//         } else {
//             res.json({ data: usageChartData });
//         }
//     });
// });

router.post("/view-orders", (req, res) => {
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;

  Report.getOrdersInTimeInterval(startDate, endDate, (error, ordersData) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.json({ data: ordersData });
  });
});


router.post("/view-employees", (req, res) => {
  // const startDate = req.body.startDate;
  // const endDate = req.body.endDate;

  Report.generateViewEmployees((error, employeesData) => {
    if (error) {
      res.status(500).json({ error: "Error fetching employees data" });
    } else {
      res.json({ data: employeesData });
      console.log("nothing wrong with the report.gen");
    }
  });
})

router.post("/view-menu-items", (req, res) => {
  // const startDate = req.body.startDate;
  // const endDate = req.body.endDate;

  Report.generateMenuItems((error, menuItemsData) => {
    if (error) {
      res.status(500).json({ error: "Error fetching menu items data" });
    } else {
      res.json({ data: menuItemsData });
    }
  });
})

router.post("/view-inventory-items", (req, res) => {
  Report.generateInventoryItems((error, inventoryItemsData) => {
    if (error) {
      res.status(500).json({ error: "Error fetching inventory items data" });
    } else {
      res.json({ data: inventoryItemsData });
    }
  });
})

module.exports = router;


