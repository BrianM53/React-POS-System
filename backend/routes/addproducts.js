const express = require("express");
const cors = require('cors');
const router = express.Router();
const AddProducts = require("../models/AddProducts"); 

router.get('/', (req, res) => {
  res.send('addproducts route working');
});

router.post("/", (req, res) => {
  const { product_name, price, category, product_description } = req.body;

  AddProducts.addProduct(
    product_name,
    price,
    category,
    product_description,
    (error, result) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ error: "Error adding product" });
      }
      res.status(201).json({ message: "Product added successfully" });
    }
  );
});

router.put("/:productId", (req, res) => {
  const productId = req.params.productId;
  const { product_name, price, category, product_description } = req.body;

  AddProducts.updateProduct(
    productId,
    product_name,
    price,
    category,
    product_description,
    (error) => {
      if (error) {
        res.status(500).json({ error: "Error updating product" });
      } else {
        res.json({ message: "Product updated successfully" });
      }
    }
  );
});

router.delete("/:productId", (req, res) => {
    const productId = req.params.productId;
  
    AddProducts.deleteProduct(productId, (error) => {
      if (error) {
        res.status(500).json({ error: "Error deleting product" });
      } else {
        res.json({ success: true });
      }
    });
  });


module.exports = router;