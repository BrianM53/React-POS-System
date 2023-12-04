var express = require("express");
const cors = require('cors');
var router = express.Router();
const AdminManagers = require("../models/AdminManagers");

router.get('/', (req, res) => {
  res.send('admin managers route working');
});

router.post("/", (req, res) => {
  const { first_name, last_name, phone, email, username, password } = req.body;

  AdminManagers.addManager(
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
  const managerId = req.params.managerId;
  const { first_name, last_name, phone, email, username, password } = req.body;

  AdminManagers.updateManager(
    managerId,
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
  const managerId = req.params.managerId;

  AdminManagers.deleteEmployee(managerId, (error) => {
    if (error) {
      res.status(500).json({ error: "Error deleting employee" });
    } else {
      res.json({ success: true });
    }
  });
});



module.exports = router;
