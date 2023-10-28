const connection = require("../connection");

class Order {
  // create a new order(note that orders are not created until the create order button is created)
  // a local list might need to be used to minimize interactions with the backend until the customer creates the order.
  static createOrder(
    employeeId,
    customerId,
    totalCost,
    paymentMethod,
    paymentStatus,
    callback
  ) {
    connection.query(
      "INSERT INTO orders (date_time, employee_id, customer_id, total_cost, payment_method, payment_status) VALUES (NOW(), $1, $2, $3, $4, $5) RETURNING order_id",
      [employeeId, customerId, totalCost, paymentMethod, paymentStatus],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        callback(null, results.rows[0].order_id);
      }
    );
  }

  // add a product to an order
  static addProductToOrder(orderId, productId, quantity, callback) {
    connection.query(
      "INSERT INTO order_details (order_id, product_id, quantity) VALUES ($1, $2, $3)",
      [orderId, productId, quantity],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        callback(null, results.rows[0]);
      }
    );
  }

  // Update product details of an existing order
  static updateOrderDetails(orderId, updatedProducts, callback) {
    // Delete existing product entries for the order
    connection.query(
      "DELETE FROM order_details WHERE order_id = $1",
      [orderId],
      (error, results) => {
        if (error) {
          return callback(error);
        }

        // Insert the updated products
        let insertedProducts = 0;
        for (let product of updatedProducts) {
          connection.query(
            "INSERT INTO order_details (order_id, product_id, quantity) VALUES ($1, $2, $3)",
            [orderId, product.productId, product.quantity],
            (error, result) => {
              if (error) {
                return callback(error);
              }

              insertedProducts += 1;
              if (insertedProducts === updatedProducts.length) {
                // All products inserted successfully, now update the order total
                this.updateOrderTotal(
                  orderId,
                  updatedProducts,
                  (error, success) => {
                    if (error) {
                      return callback(error);
                    }
                    callback(null, true); // Successfully updated order details and total
                  }
                );
              }
            }
          );
        }
      }
    );
  }

  // Update aggregate details of an existing order
  static updateOrderSummary(orderId, newTotalCost, callback) {
    connection.query(
      "UPDATE orders SET total_cost = $2 WHERE order_id = $1",
      [orderId, newTotalCost],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        callback(null, true);
      }
    );
  }

  static updateOrderTotal(orderId, updatedProducts, callback) {
    // 1. Fetching Updated Product Prices
    const productNames = updatedProducts.map((p) => p.product_name);
    connection.query(
      "SELECT product_name, price FROM products WHERE product_name = ANY($1)",
      [productNames],
      (error, results) => {
        if (error) {
          return callback(error);
        }

        const productPrices = {};
        results.rows.forEach((row) => {
          productPrices[row.product_name] = row.price;
        });

        // 2. Calculating the New Order Total
        let newTotal = 0;
        updatedProducts.forEach((product) => {
          newTotal += product.quantity * productPrices[product.product_name];
        });

        // 3. Updating the `orders` Table
        connection.query(
          "UPDATE orders SET total_cost = $1 WHERE order_id = $2",
          [newTotal, orderId],
          (error, result) => {
            if (error) {
              return callback(error);
            }
            callback(null, true);
          }
        );
      }
    );
  }
}
module.exports = Order;
