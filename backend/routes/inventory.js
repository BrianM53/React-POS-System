const express = require("express");
const router = express.Router();
const InventoryItem = require("../models/InventoryItem");

router.post("/inventory", (req, res) => {
  const { inventory_item, stock_level, restock_level, measurement_type, price } = req.body;

  InventoryItem.addInventoryItem(
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

module.exports = router;