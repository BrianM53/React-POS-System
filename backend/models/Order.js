const connection = require("../connection");


class Order {
  /**
   * Creates a new order in the database.
   *
   * @param {number} orderId - The ID of the order.
   * @param {number} employeeId - The ID of the employee placing the order.
   * @param {number} customerId - The ID of the customer associated with the order.
   * @param {number} totalCost - The total cost of the order.
   * @param {boolean} paymentStatus - The payment status of the order.
   * @param {string} paymentMethod - The payment method used for the order.
   * @param {Array} cart - The array containing the products in the order.
   * @throws {Error} Throws an error if any operation fails.
   */
  static async createOrder(orderId, employeeId, customerId, totalCost, paymentStatus, paymentMethod, cart) {
    try {
      const currentDate = new Date();
      const centralTime = currentDate.toLocaleString('en-US', {
        timeZone: 'America/Chicago',
        hour12: false,
      });

      const getMaxOrderIdQuery = `
        SELECT MAX(order_id) AS max_order_id FROM orders
      `;
      const maxOrderIdResult = await connection.query(getMaxOrderIdQuery);
      console.log("Max Order ID Result:", maxOrderIdResult.rows[0]);

      const orderId = maxOrderIdResult.rows[0].max_order_id + 1;
      console.log("New Order ID:", orderId);

      console.log("Values for Insert Query:");
      console.log("Order ID:", orderId);
      console.log("Date Time:", centralTime);
      console.log("Employee ID:", employeeId);
      console.log("Customer ID:", customerId);
      console.log("Total Cost:", totalCost);
      console.log("Payment Method:", paymentMethod);
      console.log("Payment Status:", paymentStatus);

      const query = `
        INSERT INTO orders (order_id, date_time, employee_id, customer_id, total_cost, payment_method, payment_status) 
        VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING order_id
      `;
      const newOrderResult = await connection.query(query, [
        orderId,
        centralTime,
        employeeId,
        customerId,
        totalCost,
        paymentMethod,
        paymentStatus,
      ]);

      console.log("New Order Result:", newOrderResult.rows[0]);
      
      if (cart) {
        for (const product of cart) {
          await this.addProductToOrder(newOrderResult.rows[0].order_id, product.product_id, product.quantity);
          await this.updateInventory(product.product_id, product.quantity);
        }
      }

    } catch (error) {
      console.error("Error in createOrder:", error);
      throw error;
    }
  }

  /**
   * Retrieves orders with a false payment status from the database.
   *
   * @returns {Array} Returns an array of orders with false payment status.
   * @throws {Error} Throws an error if the operation fails.
   */
  static async getOrdersWithFalsePaymentStatus() {
    try {
      const query = `
        SELECT * FROM orders
        WHERE payment_status = $1
      `;
      const ordersResult = await connection.query(query, [false]);

      return ordersResult.rows;
    } catch (error) {
      console.error("Error fetching orders with false payment status:", error);
      throw error;
    }
  }

   /**
   * Deletes an order and its associated details from the database.
   *
   * @param {number} orderId - The ID of the order to delete.
   * @returns {string} Returns a success message upon successful deletion.
   * @throws {Error} Throws an error if the operation fails.
   */
  static async deleteOrder(orderId) {
    try {
      // Delete order details associated with the orderId first
      await this.deleteOrderDetails(orderId);

      const deleteOrderQuery = `
        DELETE FROM orders WHERE order_id = $1
      `;
      await connection.query(deleteOrderQuery, [orderId]);
      return `Order with ID ${orderId} deleted successfully`;
    } catch (error) {
      console.error(`Error deleting order ${orderId}:`, error);
      throw error;
    }
  }

   /**
   * Deletes order details associated with a given order ID from the database.
   *
   * @param {number} orderId - The ID of the order for which to delete details.
   * @returns {string} Returns a success message upon successful deletion.
   * @throws {Error} Throws an error if the operation fails.
   */
  static async deleteOrderDetails(orderId) {
    try {
      const deleteOrderDetailsQuery = `
        DELETE FROM order_details WHERE order_id = $1
      `;
      await connection.query(deleteOrderDetailsQuery, [orderId]);
      return `Order details for order ID ${orderId} deleted successfully`;
    } catch (error) {
      console.error(`Error deleting order details for order ${orderId}:`, error);
      throw error;
    }
  }

  // add a product to an order
  /**
   * Adds a product to an existing order in the database.
   *
   * @param {number} orderId - The ID of the order.
   * @param {number} productId - The ID of the product to add to the order.
   * @param {number} quantity - The quantity of the product to add.
   * @throws {Error} Throws an error if the operation fails.
   */
  static async addProductToOrder(orderId, productId, quantity) {

    try {
      const result = await connection.query(
        "INSERT INTO order_details (order_id, product_id, quantity) VALUES ($1, $2, $3)",
        [orderId, productId, quantity]
      );

      return result.rows[0];
    } catch (error) {
      console.error("Error adding product to order:", error);
      throw error;
    }
  }

  /**
   * Updates the payment status of an order to true in the database.
   *
   * @param {number} orderId - The ID of the order.
   * @throws {Error} Throws an error if the operation fails.
   */
  static async updatePaymentStatusToTrue(orderId) {
    console.log("Updating payment Status");
    try {
      const query = `
        UPDATE orders
        SET payment_status = $1
        WHERE order_id = $2
      `;
      await connection.query(query, [true, orderId]);
      return `Payment status for order ${orderId} updated to true`;
    } catch (error) {
      console.error(`Error updating payment status for order ${orderId} to true:`, error);
      throw error;
    }
  }

  /**
   * Updates the inventory after placing an order.
   *
   * @param {number} productId - The ID of the product.
   * @param {number} quantity - The quantity of the product.
   * @throws {Error} Throws an error if the operation fails.
   */
  static async updateInventory(productId, quantity) {
    try {
      const quantityAndID = await connection.query(
        "SELECT quantity, inventory_id FROM product_ingredients WHERE product_id = $1",
        [productId]
      );

      for (const item of quantityAndID.rows) {
        const inventoryId = item.inventory_id;
        const stockLevelResult = await connection.query(
          "SELECT stock_level FROM inventory WHERE inventory_id = $1",
          [inventoryId]
        );
        const currentStockLevel = stockLevelResult.rows[0].stock_level;
        const newStockLevel = parseInt(currentStockLevel - quantity * item.quantity);

        await connection.query(
          "UPDATE inventory SET stock_level = $1 WHERE inventory_id = $2",
          [newStockLevel, inventoryId]
        );
      }
    } catch (error) {
      console.error("Error updating inventory:", error);
      throw error;
    }
  }

  // Update product details of an existing order
   /**
   * Updates product details of an existing order.
   *
   * @param {number} orderId - The ID of the order.
   * @param {Array} updatedProducts - An array containing updated product details.
   * @param {function} callback - The callback function to handle the result.
   * @throws {Error} Throws an error if the operation fails.
   */
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

  toString() {
    return `Order ID: ${this.orderId}, Employee ID: ${this.employeeId}, Customer ID: ${this.customerId}, Total Cost: ${this.totalCost}, Payment Status: ${this.paymentStatus}`;
  }
}
module.exports = Order;
