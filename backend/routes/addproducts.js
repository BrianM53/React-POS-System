const express = require("express");
const router = express.Router();
const AddProduct = require("../models/AddProducts"); 

router.post("/products", (req, res) => {
  const { product_name, price, category, product_description } = req.body;

  AddProduct.addProduct(
    product_name,
    price,
    category,
    product_description,
    callback,
    (error, result) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ error: "Error adding product" });
      }
      res.status(201).json({ message: "Product added successfully" });
    }
  );
});

module.exports = router;