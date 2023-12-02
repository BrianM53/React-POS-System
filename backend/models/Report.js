const connection = require("../connection");

class Report {
  static generateSalesReport(startDate, endDate, callback) {
    console.log(startDate, " ", endDate);
    connection.query(
      "SELECT " +
        "products.product_id, " +
        "products.product_name, " +
        "products.price, " +
        "SUM(order_details.quantity) as numSold, " +
        "SUM(products.price * order_details.quantity) as totalSales " +
        "FROM products " +
        "INNER JOIN order_details " +
        "ON products.product_id = order_details.product_id " +
        "INNER JOIN orders " +
        "ON order_details.order_id = orders.order_id " +
        "WHERE orders.date_time BETWEEN $1::timestamp AND $2::timestamp " +
        "GROUP BY products.product_id, products.product_name, products.price",
      [startDate, endDate],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        callback(null, results.rows);
      }
    );
  }

  static generateRestockReport(callback) {
    connection.query(
      "SELECT products.product_name, inventory.inventory_item, inventory.stock_level, inventory.restock_level, inventory.measurement_type \r\n" + //
        "FROM inventory\r\n" + //
        "INNER JOIN product_ingredients\r\n" + //
        "ON inventory.inventory_id = product_ingredients.inventory_id\r\n" + //
        "INNER JOIN products\r\n" + //
        "ON product_ingredients.product_id = products.product_id\r\n" + //
        "WHERE stock_level < restock_level;\r\n", //

      (error, results) => {
        if (error) {
          return callback(error);
        }
        callback(null, results.rows);
      }
    );
  }

  static generateExcessReport(startDate, endDate, callback) {
    connection.query(
      `WITH usedStock AS (
                SELECT
                    inventory.inventory_id,
                    inventory.inventory_item,
                    SUM(CASE WHEN orders.date_time BETWEEN $1::timestamp AND $2::timestamp THEN order_details.quantity * product_ingredients.quantity ELSE 0 END) AS total_used_between_timestamps
                FROM inventory
                INNER JOIN product_ingredients ON inventory.inventory_id = product_ingredients.inventory_id
                INNER JOIN order_details ON product_ingredients.product_id = order_details.product_id
                INNER JOIN orders ON order_details.order_id = orders.order_id
                WHERE orders.date_time >= $3::timestamp
                GROUP BY inventory.inventory_id, inventory.inventory_item
            ),
            currentStock AS (
                SELECT
                    inventory.inventory_id,
                    SUM(inventory.stock_level) AS current_stock
                FROM inventory
                GROUP BY inventory.inventory_id
            )
            SELECT
                I.inventory_item,
                I.total_used_between_timestamps AS total_consumed,
                C.current_stock AS current_stock,
                (I.total_used_between_timestamps + C.current_stock) AS past_stock,
                ((I.total_used_between_timestamps * 1.0) / (I.total_used_between_timestamps + C.current_stock)) * 100 AS percent_sold
            FROM usedStock AS I
            INNER JOIN currentStock AS C ON I.inventory_id = C.inventory_id
            WHERE ((I.total_used_between_timestamps * 1.0) / (I.total_used_between_timestamps + C.current_stock)) * 100 < 10;`,
      [startDate, endDate, startDate],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        callback(null, results.rows);
      }
    );
  }

  static generateSellsTogether(startDate, endDate, callback) {
    connection.query(
      `SELECT 
                product1.product_id AS lol1, 
                product2.product_id AS lol2, 
                productsJoin1.product_name AS product_name1, 
                productsJoin2.product_name AS product_name2, 
                COUNT(*) AS frequency
                FROM 
                orders
                INNER JOIN order_details AS product1 ON orders.order_id = product1.order_id
                INNER JOIN order_details AS product2 ON orders.order_id = product2.order_id
                INNER JOIN products AS productsJoin1 ON productsJoin1.product_id = product1.product_id
                INNER JOIN products AS productsJoin2 ON productsJoin2.product_id = product2.product_id
            WHERE 
                orders.date_time BETWEEN $1::timestamp AND $2::timestamp 
                AND product1.product_id <> product2.product_id
            GROUP BY 
                product1.product_id, product2.product_id, productsJoin1.product_name, productsJoin2.product_name
            ORDER BY 
                frequency DESC;
            `,
      [startDate, endDate],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        callback(null, results.rows);
      }
    );
  }

  static async generateUsageChart() {
    // Assuming you have startDatePicker and endDatePicker as references to your date pickers
    // const startDate = startDatePicker.value;
    // const endDate = endDatePicker.value;

    const usageQuery =
      "SELECT CONCAT(i.inventory_item, ' (', i.measurement_type, ')') as inventoryItem, SUM(pi.quantity) as amountUsed " +
      "FROM orders o " +
      "JOIN order_details od ON o.order_id = od.order_id " +
      "JOIN product_ingredients pi ON od.product_id = pi.product_id " +
      "JOIN inventory i ON pi.inventory_id = i.inventory_id " +
      "WHERE o.date_time >= ? AND o.date_time <= ? " +
      "GROUP BY i.inventory_item, i.measurement_type";

    try {
      const response = await axios.post("/your-backend-endpoint", {
        startDate: startDate.toISOString().slice(0, 10),
        endDate: endDate.toISOString().slice(0, 10),
        query: usageQuery,
      });

      const data = response.data;

      const labels = data.map((item) => item.inventoryItem);
      const amounts = data.map((item) => item.amountUsed);

      const ctx = document.getElementById("usageChart").getContext("2d");

      new Chart(ctx, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: `Inventory items used from ${startDate} to ${endDate}`,
              data: amounts,
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              type: "category",
              title: {
                display: true,
                text: "Inventory Item",
              },
            },
            y: {
              type: "linear",
              position: "left",
              title: {
                display: true,
                text: "Amount",
              },
            },
          },
        },
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // static async generateUsageChart(startDate, endDate, callback) {
  //     const usageQuery =
  //       "SELECT CONCAT(i.inventory_item, ' (', i.measurement_type, ')') as inventoryItem, SUM(pi.quantity) as amountUsed " +
  //       "FROM orders o " +
  //       "JOIN order_details od ON o.order_id = od.order_id " +
  //       "JOIN product_ingredients pi ON od.product_id = pi.product_id " +
  //       "JOIN inventory i ON pi.inventory_id = i.inventory_id " +
  //       "WHERE o.date_time >= ? AND o.date_time <= ? " +
  //       "GROUP BY i.inventory_item, i.measurement_type";

  //     try {
  //       const response = await axios.post("/reports/usage-chart", {
  //         startDate: startDate.toISOString().slice(0, 10),
  //         endDate: endDate.toISOString().slice(0, 10),
  //       });

  //       const data = response.data.data;

  //       const labels = data.map((item) => item.inventoryItem);
  //       const amounts = data.map((item) => item.amountUsed);

  //       const ctx = document.getElementById("usageChart").getContext("2d");

  //       new Chart(ctx, {
  //         type: "bar",
  //         data: {
  //           labels: labels,
  //           datasets: [
  //             {
  //               label: `Inventory items used from ${startDate} to ${endDate}`,
  //               data: amounts,
  //               backgroundColor: "rgba(75, 192, 192, 0.2)",
  //               borderColor: "rgba(75, 192, 192, 1)",
  //               borderWidth: 1,
  //             },
  //           ],
  //         },
  //         options: {
  //           scales: {
  //             x: {
  //               type: "category",
  //               title: {
  //                 display: true,
  //                 text: "Inventory Item",
  //               },
  //             },
  //             y: {
  //               type: "linear",
  //               position: "left",
  //               title: {
  //                 display: true,
  //                 text: "Amount",
  //               },
  //             },
  //           },
  //         },
  //       });
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  // }

  static getOrdersInTimeInterval(startDate, endDate, callback) {
    const query = `
        SELECT o.order_id, o.date_time, o.total_cost, od.product_id, od.quantity
        FROM orders o
        LEFT JOIN order_details od ON o.order_id = od.order_id
        WHERE o.date_time BETWEEN $1::timestamp AND $2::timestamp
        ORDER BY o.date_time;
        `;
    console.log(startDate, " ", endDate);
    connection.query(query, [startDate, endDate], (error, results) => {
      if (error) {
        return callback(error, null);
      }
      callback(null, results.rows);
    });
  }

  static generateViewEmployees(callback) 
  {
    connection.query(
      "SELECT " +
      "  employees.employee_id, " +
      "  employees.first_name, " +
      "  employees.last_name, " +
      "  employees.phone, " +
      "  employees.email, " +
      "  employees.username, " +
      "  employees.password " +
      "FROM employees;",

      (error, results) => {
        if (error) {
          return callback(error);
        }
        callback(null, results.rows);
      }
    );
  }

  static generateMenuItems(callback)
  {
    connection.query(
      "SELECT " +
      "  products.product_id, " +
      "  products.product_name, " +
      "  products.price, " +
      "  products.category, " +
      "  products.product_description " +
      "FROM products;",

      (error, results) => {
        if (error) 
        {
          return callback(error);
        }
        callback(null, results.rows);
      }
    )
  }

  static generateInventoryItems(callback)
  {
    connection.query(
      "SELECT " +
      "  inventory.inventory_id, " +
      "  inventory.inventory_item, " +
      "  inventory.stock_level, " +
      "  inventory.restock_level, " +
      "  inventory.measurement_type, " +
      "  inventory.price " +
      "FROM inventory;",
      (error, results) => {
        if (error) 
        {
          return callback(error);
        }
        callback(null, results.rows);
      }
    )
  }

  static deleteEmployee(employeeId, callback) 
  {
    const query = "DELETE FROM employees WHERE employee_id = $1";
    connection.query(query, [employeeId], (error) => {
      if (error) 
      {
        console.error("Error deleting employee:", error);
        callback(error);
      } 
      else 
      {
        console.log("Employee deleted successfully");
        callback(null);
      }
    });
  }

  static deleteMenuItem(menuItemId, callback) 
  {
    const query = "DELETE FROM products WHERE product_id = $1";
    connection.query(query, [menuItemId], (error) => {
      if (error) 
      {
        console.error("Error deleting employee:", error);
        callback(error);
      } 
      else 
      {
        console.log("Employee deleted successfully");
        callback(null);
      }
    });
  }

  static deleteInventoryItem(inventoryItemId, callback)
  {
    const query = "DELETE FROM inventory WHERE inventory_id = $1";
    connection.query(query, [inventoryItemId], (error) => {
      if (error) 
      {
        console.error("Error deleting inventory item:", error);
        callback(error);
      } 
      else 
      {
        console.log("Inventory item deleted successfully");
        callback(null);
      }
    });
  }

}

module.exports = Report;
