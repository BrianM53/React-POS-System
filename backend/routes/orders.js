var express = require("express");
var router = express.Router();
const Order = require("../models/Order");

router.post("/", (req, res) => {
  const { employeeId, customerId, totalCost, paymentMethod, paymentStatus } =
    req.body;

  Order.createOrder(
    employeeId,
    customerId,
    totalCost,
    paymentMethod,
    paymentStatus,
    (error, orderId) => {
      if (error) {
        return res.status(500).json({ error: "Error creating order" });
      }
      res.json({ orderId });
    }
  );
});

router.post("/:orderId/products", (req, res) => {
  const { productId, quantity } = req.body;
  const orderId = req.params.orderId;

  Order.addProductToOrder(orderId, productId, quantity, (error, orderId) => {
    if (error) {
      return res.status(500).json({ error: "Error creating order" });
    }
    res.json({ orderId });
  });
});

router.put("/:orderId/products", (req, res) => {
  const updatedProducts = req.body.products;
  const orderId = req.params.orderId;

  Order.updateOrderDetails(orderId, updatedProducts, (error, success) => {
    if (error) {
      return res.status(500).json({ error: "Error updating order details" });
    }
    res.json({ success });
  });
});

router.put("/:orderId/summary", (req, res) => {
  const { newTotalCost } = req.body;
  const orderId = req.params.orderId;

  Order.updateOrderSummary(orderId, newTotalCost, (error, success) => {
    if (error) {
      return res.status(500).json({ error: "Error updating order summary" });
    }
    res.json({ success });
  });
});

module.exports = router;
