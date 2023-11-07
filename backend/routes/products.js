var express = require("express");
var router = express.Router();
const Product = require("../models/Products");

router.get("/", (req, res) => {
  res.send("test products route");
});

router.get("/:category", (req, res) => {
  const category = req.params.category; 

  Product.getByCategory(category, (error, products) => {
    if (error) {
      res.status(500).json({ error: "Error fetching products" });
    } else {
      res.json(products);
    }
  });
});

router.get("/name/:productName", (req, res) => {
  const productName = req.params.productName;

  Product.getByName(productName, (error, product) => {
    if (error) {
      res.status(500).json({ error: "Error fetching product by name" });
    } else {
      res.json(product);
    }
  });
});

router.get("/id/:productId", (req, res) => {
  const productId = req.params.productId;
  Product.getById(productId, (error, product) => {
    if (error) {
      res.status(500).json({ error: "Error fetching products by ID" });
    } else {
      res.json(product);
    }
  });
});

router.post("/add", (req, res) => {
  const { productName, price, category, productDescription } = req.body;
  Product.add(
    productName,
    price,
    category,
    productDescription,
    (error, success) => {
      if (error) {
        res.status(500).json({ error: "Error adding product" });
      } else {
        res.json({ success: true, message: "Product added successfully" });
      }
    }
  );
});

router.put("/update/:productId", (req, res) => {
  const productId = req.params.productId;
  const { productName, price, category, productDescription } = req.body;
  Product.update(
    productId,
    productName,
    price,
    category,
    productDescription,
    (error, success) => {
      if (error) {
        res.status(500).json({ error: "Error updating product" });
      } else {
        res.json({ success: true, message: "Product updated successfully" });
      }
    }
  );
});

module.exports = router;
