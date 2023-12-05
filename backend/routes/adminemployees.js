var express = require("express");
const cors = require('cors');
var router = express.Router();
const AdminEmployees = require("../models/AdminEmployees");

router.get('/', (req, res) => {
  res.send('admin employees route working');
});

router.post("/", (req, res) => {
  const { first_name, last_name, phone, email, username, password } = req.body;

  AdminEmployees.addEmployee(
    first_name,
    last_name,
    phone,
    email,
    username,
    password,
    (error, result) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ error: "Error adding employee" });
      }
      res.status(201).json({ message: "Employee added successfully" });
    }
  );
});

router.put("/:employeeId", (req, res) => {
  const employeeId = req.params.employeeId;
  const { first_name, last_name, phone, email, username, password } = req.body;

  AdminEmployees.updateEmployee(
    employeeId,
    first_name,
    last_name,
    phone,
    email,
    username,
    password,
    (error) => {
      if (error) {
        res.status(500).json({ error: "Error updating employee" });
      } else {
        res.json({ message: "Employee updated successfully" });
      }
    }
  );
});

router.delete("/:employeeId", (req, res) => {
  const employeeId = req.params.employeeId;

  AdminEmployees.deleteEmployee(employeeId, (error) => {
    if (error) {
      res.status(500).json({ error: "Error deleting employee" });
    } else {
      res.json({ success: true });
    }
  });
});

router.post("/view-employees", (req, res) => {
  // const startDate = req.body.startDate;
  // const endDate = req.body.endDate;

  AdminEmployees.generateViewEmployees((error, employeesData) => {
    if (error) {
      res.status(500).json({ error: "Error fetching employees data" });
    } else {
      res.json({ data: employeesData });
      // console.log("nothing wrong with the report.gen");
    }
  });
})

module.exports = router;
