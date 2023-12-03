const express = require("express");
const cors = require('cors');
const router = express.Router();
const Inventory = require("../models/Inventory");

router.get('/', (req, res) => {
  res.send('inventory route working');
});

router.post("/", (req, res) => {
  const {
    inventory_item,
    stock_level,
    restock_level,
    measurement_type,
    price,
  } = req.body;

  Inventory.addInventoryItem(
    inventory_item,
    stock_level,
    restock_level,
    measurement_type,
    price,
    (error, result) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ error: "Error adding inventory item" });
      }
      res.status(201).json({ message: "Inventory item added successfully" });
    }
  );
});

router.delete("/:inventoryId", (req, res) => {
  const inventoryId = req.params.inventoryId;

  Inventory.deleteInventoryItem(inventoryId, (error) => {
    if (error) {
      res.status(500).json({ error: "Error deleting inventory item" });
    } else {
      res.json({ success: true });
    }
  });
});

module.exports = router;