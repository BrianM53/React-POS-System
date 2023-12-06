var express = require("express");
var router = express.Router();
const Order = require("../models/Order");

router.post("/create", async (req, res) => {
  const { employeeId, customerId, totalCost, paymentStatus, cart } = req.body;

  try {
    console.log("Trying to create order");
    const orderId = 1; // You might have a function to generate order IDs
    const newOrderId = new Promise((resolve, reject) => {
      Order.createOrder(
        orderId,
        employeeId,
        customerId,
        totalCost,
        paymentStatus,
        'Online Transfer', // Set payment method to 'Online Transfer' by default
        cart,
        (error, id) => {
          if (error) {
            reject(error);
          } else {
            resolve(id);
          }
        }
      );
    });

    const newOrder = new Order({
      orderId: newOrderId,
      employeeId,
      customerId,
      totalCost,
      paymentStatus,
      paymentMethod: 'Online Transfer',
    });

    console.log(newOrder.toString());
    res.status(200).json({ message: "Order created successfully", orderId: newOrderId });

  } catch (error) {
    console.error("Error creating order", error);
    res.status(500).json({ error: "Error creating order" });
  }
});


router.post("/products", (req, res) => {
  const { productId, quantity } = req.body;

  Order.addProductToOrder(productId, quantity, (error, orderId) => {
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

router.get("/falsePaymentStatus", async (req, res) => {
  try {
    const orders = await Order.getOrdersWithFalsePaymentStatus(); // Assuming you have a method in your Order model to fetch orders with false payment status
    res.json(orders);
  } catch (error) {
    console.error("Error fetching orders with false payment status:", error);
    res.status(500).json({ error: "Error fetching orders" });
  }
});

router.delete("/delete/:orderId", async (req, res) => {
  const orderId = req.params.orderId;

  try {
    // Call the method to delete order details for the provided orderId
    await Order.deleteOrder(orderId);

    res.json({ message: `Order with ID ${orderId} and its details deleted successfully` });
  } catch (error) {
    console.error(`Error deleting order with ID ${orderId}:`, error);
    res.status(500).json({ error: "Error deleting order and its details" });
  }
});

router.post("/:orderId/toggle-payment", async (req, res) => {
  const orderId = req.params.orderId;

  try {
    // Call the method to update payment status to true for the provided orderId
    await Order.updatePaymentStatusToTrue(orderId);

    res.json({ message: `Payment status for order ${orderId} toggled to true` });
  } catch (error) {
    console.error(`Error toggling payment status for order ${orderId}:`, error);
    res.status(500).json({ error: "Error toggling payment status" });
  }
});


module.exports = router;
