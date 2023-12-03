const express = require("express");
const cors = require('cors');
const router = express.Router();
const AddProduct = require("../models/AddProducts"); 

router.use(cors());
router.use(express.json());

router.options('*', cors());

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

router.delete("/products/:productId", (req, res) => {
    const productId = req.params.productId;
  
    AddProduct.deleteEmployee(productId, (error) => {
      if (error) {
        res.status(500).json({ error: "Error deleting product" });
      } else {
        res.json({ success: true });
      }
    });
  });

  function handleRemoveMenuItem(menuItem)
  {
    console.log("Removing employee:", menuItem);
  
    axios
      .delete(BACKEND_URL + "/reports/products/" + menuItem.product_id, {
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(() => {
        console.log("Employee removed successfully");
      })
      .catch((error) => {
        console.error("Axios error:", error);
      });
  }

module.exports = router;