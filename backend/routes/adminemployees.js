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

router.delete("/:employeeId/remove-and-create", async (req, res) => {
  const employeeId = req.params.employeeId;

  console.log("employeeId: " + employeeId);

  try {
    await AdminEmployees.deleteEmployee(employeeId, async (error, deletedEmployee) => {
      if (error) {
        res.status(500).json({ error: "Error deleting employee" });
      } else if (deletedEmployee) {
        console.log("deletedEmployee: " + JSON.stringify(deletedEmployee));

        const { role } = req.body;

        console.log("role: " + role);
        console.log("req.body: " + JSON.stringify(req.body));

        if (role === "employee") {
          console.log("inside role == employee");
          await AdminEmployees.addEmployee(
            deletedEmployee.first_name,
            deletedEmployee.last_name,
            deletedEmployee.phone,
            deletedEmployee.email,
            deletedEmployee.username,
            deletedEmployee.password,
            (error, addedEmployee) => {
              if (error) {
                console.error("Error adding employee:", error);
                res.status(500).json({ error: "Error adding employee" });
              } else {
                console.log("Employee added successfully:", addedEmployee);
                res.json({ success: true });
              }
            }
          );
        } else if (role === "manager") {
          console.log("inside role == manager");
          await AdminEmployees.addManager(
            deletedEmployee.first_name,
            deletedEmployee.last_name,
            deletedEmployee.phone,
            deletedEmployee.email,
            deletedEmployee.username,
            deletedEmployee.password,
            (error, addedManager) => {
              if (error) {
                console.error("Error adding manager:", error);
                res.status(500).json({ error: "Error adding manager" });
              } else {
                console.log("Manager added successfully:", addedManager);
                res.json({ success: true });
              }
            }
          );
        } else if (role === "customer") {
          console.log("inside role == customer");
          await AdminEmployees.addCustomer(
            deletedEmployee.first_name,
            deletedEmployee.last_name,
            deletedEmployee.phone,
            deletedEmployee.email,
            (error, addedCustomer) => {
              if (error) {
                console.error("Error adding customer:", error);
                res.status(500).json({ error: "Error adding customer" });
              } else {
                console.log("Customer added successfully:", addedCustomer);
                res.json({ success: true });
              }
            }
          );
        } else {
          res.status(404).json({ error: "Invalid role specification" });
        }
      }
    });
  } catch (error) {
    res.status(500).json({ error: "Error deleting and adding employee" });
  }
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
