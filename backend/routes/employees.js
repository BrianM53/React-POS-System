var express = require("express");
const cors = require('cors');
var router = express.Router();
const Employees = require("../models/Employees");

router.get('/', (req, res) => {
  res.send('employees route working');
});

router.post("/", (req, res) => {
  const { first_name, last_name, phone, email, username, password } = req.body;
  Employees.emailExists(email, (error, exists) => {
    if (error) {
      return res
        .status(500)
        .json({ error: "Error checking employee existence" });
    }
    if (exists) {
      return res.status(409).json({ message: "Employee already exists" });
    } else {
      Employees.addEmployee(
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
    }
  });
});

router.delete("/:employeeId", (req, res) => {
  const employeeId = req.params.employeeId;

  Employees.deleteEmployee(employeeId, (error) => {
    if (error) {
      res.status(500).json({ error: "Error deleting employee" });
    } else {
      res.json({ success: true });
    }
  });
});

module.exports = router;
