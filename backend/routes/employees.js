var express = require("express");
var router = express.Router();
const Employee = require("../models/Employee");

router.post("/employees", (req, res) => {
  const { first_name, last_name, phone, email, username, password } = req.body;
  Employee.emailExists(email, (error, exists) => {
    if (error) {
      return res
        .status(500)
        .json({ error: "Error checking employee existence" });
    }
    if (exists) {
      return res.status(409).json({ message: "Employee already exists" });
    } else {
      Employee.addEmployee(
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

module.exports = router;
