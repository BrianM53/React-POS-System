var express = require("express");
const cors = require('cors');
var router = express.Router();
const AdminCustomers = require("../models/AdminCustomers");

router.get('/', (req, res) => {
  res.send('admin customers route working');
});

router.post("/", (req, res) => {
  const { first_name, last_name, phone, email} = req.body;

  AdminCustomers.addCustomer(
    first_name,
    last_name,
    phone,
    email,
    (error, result) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ error: "Error adding customer" });
      }
      res.status(201).json({ message: "Customer added successfully" });
    }
  );
});

router.put("/:customerId", (req, res) => {
  const customerId = req.params.customerId;
  const { first_name, last_name, phone, email} = req.body;

  AdminCustomers.updateCustomer(
    customerId,
    first_name,
    last_name,
    phone,
    email,
    (error) => {
      if (error) {
        res.status(500).json({ error: "Error updating customer" });
      } else {
        res.json({ message: "Customer updated successfully" });
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

router.delete("/:customerId/remove-and-create", async (req, res) => {
  const customerId = req.params.customerId;

  console.log("employeeId: " + customerId);

  try {

    console.log("inside try");

    await AdminCustomers.deleteCustomer(customerId, async (error, deletedCustomer) => {
      if (error) 
      {
        res.status(500).json({ error: "Error deleting customer" });
      } 
      else if (deletedCustomer) 
      {
        console.log("inside else if");

        console.log("deletedCustomer: " + JSON.stringify(deletedCustomer));

        const { role } = req.body;

        console.log("role: " + role);
        console.log("req.body: " + JSON.stringify(req.body));

        const timestamp = Date.now(); 
        const default_username = "defaultUsername" + timestamp;
        const default_password = "defaultPassword" + timestamp;

        if (role === "employee") {
          console.log("inside role == employee");
          await AdminCustomers.addEmployee(
            deletedCustomer.first_name,
            deletedCustomer.last_name,
            deletedCustomer.phone,
            deletedCustomer.email,
            default_username,
            default_password,
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
          await AdminCustomers.addManager(
            deletedCustomer.first_name,
            deletedCustomer.last_name,
            deletedCustomer.phone,
            deletedCustomer.email,
            default_username,
            default_password,
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
          await AdminCustomers.addCustomer(
            deletedCustomer.first_name,
            deletedCustomer.last_name,
            deletedCustomer.phone,
            deletedCustomer.email,
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

router.post("/view-customers", (req, res) => {
  // const startDate = req.body.startDate;
  // const endDate = req.body.endDate;

  // console.log("Does it get into the router.post?");

  AdminCustomers.generateViewCustomers((error, customersData) => {
    if (error) {
      res.status(500).json({ error: "Error fetching customers data" });
    } else {
      res.json({ data: customersData });
      // console.log("Nothing wrong with the report.gen");
    }
  });
})



module.exports = router;
