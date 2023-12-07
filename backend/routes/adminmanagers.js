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
        return res.status(500).json({ error: "Error adding manager" });
      }
      res.status(201).json({ message: "Manager added successfully" });
    }
  );
});

router.put("/:managerId", (req, res) => {
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
        res.status(500).json({ error: "Error updating manager" });
      } else {
        res.json({ message: "Manager updated successfully" });
      }
    }
  );
});

router.delete("/:managerId", (req, res) => {
  const managerId = req.params.managerId;

  AdminManagers.deleteManager(managerId, (error) => {
    if (error) {
      res.status(500).json({ error: "Error deleting manager" });
    } else {
      res.json({ success: true });
    }
  });
});

router.delete("/:managerId/remove-and-create", async (req, res) => {
  const managerId = req.params.managerId;

  console.log("managerId: " + managerId);

  try {
    await AdminManagers.deleteManager(managerId, async (error, deletedManager) => {
      if (error) {
        res.status(500).json({ error: "Error deleting manager" });
      } else if (deletedManager) {
        console.log("deletedManager: " + JSON.stringify(deletedManager));

        const { role } = req.body;

        console.log("role: " + role);
        console.log("req.body: " + JSON.stringify(req.body));

        if (role === "employee") {
          console.log("inside role == employee");
          await AdminManagers.addEmployee(
            deletedManager.first_name,
            deletedManager.last_name,
            deletedManager.phone,
            deletedManager.email,
            deletedManager.username,
            deletedManager.password,
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
          await AdminManagers.addManager(
            deletedManager.first_name,
            deletedManager.last_name,
            deletedManager.phone,
            deletedManager.email,
            deletedManager.username,
            deletedManager.password,
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
          await AdminManagers.addCustomer(
            deletedManager.first_name,
            deletedManager.last_name,
            deletedManager.phone,
            deletedManager.email,
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
    res.status(500).json({ error: "Error deleting and adding manager" });
  }
});

router.post("/view-managers", (req, res) => {
    // const startDate = req.body.startDate;
    // const endDate = req.body.endDate;
  
    AdminManagers.generateViewManagers((error, managersData) => {
      if (error) {
        res.status(500).json({ error: "Error fetching managers data" });
      } else {
        res.json({ data: managersData });
        // console.log("Nothing wrong with the report.gen");
      }
    });
  })



module.exports = router;
