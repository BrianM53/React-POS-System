var express = require("express");
var router = express.Router();
const Order = require("../models/Order");

router.post("/create", async (req, res) => {
  const { employeeId, customerId, totalCost, paymentStatus } = req.body;

  try {
    const orderId = 1; // You might have a function to generate order IDs
    const newOrderId = await new Promise((resolve, reject) => {
      Order.createOrder(
        orderId,
        employeeId,
        customerId,
        totalCost,
        paymentStatus,
        'Online Transfer', // Set payment method to 'Online Transfer' by default
        (error, id) => {
          if (error) {
            reject(error);
          } else {
            resolve(id);
          }
        }
      );
    });

    console.log("Trying to create order");
    const newOrder = new Order({
      orderId: newOrderId,
      employeeId,
      customerId,
      totalCost,
      paymentStatus,
      paymentMethod: 'Online Transfer',
    });

    console.log(newOrder.toString());
    res.json({ orderId: newOrderId });
  } catch (error) {
    console.error("Error creating order", error);
    res.status(500).json({ error: "Error creating order" });
  }
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
