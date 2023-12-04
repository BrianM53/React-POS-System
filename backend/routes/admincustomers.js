var express = require("express");
const cors = require('cors');
var router = express.Router();
const AdminCustomers = require("../models/AdminCustomers");

router.get('/', (req, res) => {
  res.send('admin customers route working');
});

router.post("/", (req, res) => {
  const { first_name, last_name, phone, email, username, password } = req.body;

  AdminCustomers.addCustomer(
    first_name,
    last_name,
    phone,
    email,
    username,
    password,
    (error, result) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ error: "Error adding customer" });
      }
      res.status(201).json({ message: "customer added successfully" });
    }
  );
});

router.put("/:customerId", (req, res) => {
  const customerId = req.params.customerId;
  const { first_name, last_name, phone, email, username, password } = req.body;

  AdminCustomers.updateCustomer(
    customerId,
    first_name,
    last_name,
    phone,
    email,
    username,
    password,
    (error) => {
      if (error) {
        res.status(500).json({ error: "Error updating customer" });
      } else {
        res.json({ message: "customer updated successfully" });
      }
    }
  );
});

router.delete("/:customerId", (req, res) => {
  const customerId = req.params.customerId;

  AdminCustomers.deleteCustomer(customerId, (error) => {
    if (error) {
      res.status(500).json({ error: "Error deleting customer" });
    } else {
      res.json({ success: true });
    }
  });
});

router.post("/view-customers", (req, res) => {
  // const startDate = req.body.startDate;
  // const endDate = req.body.endDate;

  console.log("Does it get into the router.post?");

  AdminCustomers.generateViewCustomers((error, customersData) => {
    if (error) {
      res.status(500).json({ error: "Error fetching customers data" });
    } else {
      res.json({ data: customersData });
      console.log("nothing wrong with the report.gen");
    }
  });
})



module.exports = router;
