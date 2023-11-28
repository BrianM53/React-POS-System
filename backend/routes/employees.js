var express = require("express");
var router = express.Router();
const Employee = require("../models/Employee");

router.post("/", (req, res) => {
  const { firstName, lastName, phone, email, username, password } = req.body;
  Employee.addEmployee(
    firstName,
    lastName,
    phone,
    email,
    username,
    password,
    (error, result) => {
      if (error) {
        return res.status(500).json({ error: "Error adding employee" });
      }
      res.json({ message: "Employee added successfully" });
    }
  );
});
module.exports = router;
