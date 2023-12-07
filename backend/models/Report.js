const connection = require("../connection");

class Report {
  /**
   * Generates a sales report for a specified date range.
   *
   * @param {string} startDate - The start date of the report.
   * @param {string} endDate - The end date of the report.
   * @param {function} callback - The callback function to handle the result.
   * @throws {Error} Throws an error if the operation fails.
   */
  static generateSalesReport(startDate, endDate, callback) {
    // console.log(startDate, " ", endDate);
    connection.query(
      `SELECT
          products.product_id,
          products.product_name,
          products.price,
          SUM(order_details.quantity) AS numSold,
          SUM(products.price * order_details.quantity) AS totalSales
      FROM
          products
      INNER JOIN
          order_details ON products.product_id = order_details.product_id
      INNER JOIN
          orders ON order_details.order_id = orders.order_id
      WHERE
          orders.date_time BETWEEN $1::timestamp AND $2::timestamp
      GROUP BY
          products.product_id, products.product_name, products.price
      ORDER BY
          numSold DESC; -- Sorts by the amount sold in descending order
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

  /**
   * Generates a restock report for products with low stock levels.
   *
   * @param {function} callback - The callback function to handle the result.
   * @throws {Error} Throws an error if the operation fails.
   */
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

  /**
   * Generates an excess report for products with low sales percentages.
   *
   * @param {string} startDate - The start date of the report.
   * @param {string} endDate - The end date of the report.
   * @param {function} callback - The callback function to handle the result.
   * @throws {Error} Throws an error if the operation fails.
   */
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
        WHERE ((I.total_used_between_timestamps * 1.0) / (I.total_used_between_timestamps + C.current_stock)) * 100 < 10
        ORDER BY total_consumed DESC;`,
      [startDate, endDate, startDate],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        callback(null, results.rows);
      }
    );
  }

  /**
   * Generates a report on products frequently sold together.
   *
   * @param {string} startDate - The start date of the report.
   * @param {string} endDate - The end date of the report.
   * @param {function} callback - The callback function to handle the result.
   * @throws {Error} Throws an error if the operation fails.
   */
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

  /**
   * Generates a usage chart for the top 10 inventory items used in a specified date range.
   *
   * @param {string} startDate - The start date of the report.
   * @param {string} endDate - The end date of the report.
   * @param {function} callback - The callback function to handle the result.
   * @throws {Error} Throws an error if the operation fails.
   */
  static generateUsageChart(startDate, endDate, callback) {
    const usageQuery = `
        SELECT CONCAT(i.inventory_item, ' (', i.measurement_type, ')') as inventoryItem, 
              SUM(pi.quantity) as amountUsed 
        FROM orders o 
        JOIN order_details od ON o.order_id = od.order_id 
        JOIN product_ingredients pi ON od.product_id = pi.product_id 
        JOIN inventory i ON pi.inventory_id = i.inventory_id 
        WHERE o.date_time BETWEEN $1::timestamp AND $2::timestamp 
        GROUP BY i.inventory_item, i.measurement_type 
        ORDER BY SUM(pi.quantity) DESC 
        LIMIT 10;
      `;

    connection.query(usageQuery, [startDate, endDate], (error, results) => {
      if (error) {
        return callback(error);
      }
      callback(null, results.rows);
    });
  }

  /**
   * Retrieves orders within a specified time interval.
   *
   * @param {string} startDate - The start date of the interval.
   * @param {string} endDate - The end date of the interval.
   * @param {function} callback - The callback function to handle the result.
   * @throws {Error} Throws an error if the operation fails.
   */
  static getOrdersInTimeInterval(startDate, endDate, callback) {
    const query = `
      SELECT
          o.order_id,
          o.date_time,
          o.total_cost,
          p.product_name AS product_name,
          od.quantity
      FROM
          orders o
      LEFT JOIN
          order_details od ON o.order_id = od.order_id
      LEFT JOIN
          products p ON od.product_id = p.product_id
      WHERE
          o.date_time BETWEEN $1::timestamp AND $2::timestamp
      ORDER BY
          o.date_time;
    `;  
    // console.log(startDate, " ", endDate);
    connection.query(query, [startDate, endDate], (error, results) => {
      if (error) {
        return callback(error, null);
      }
      callback(null, results.rows);
    });
  }

  /**
   * Generates a view of all employees in the system.
   *
   * @param {function} callback - The callback function to handle the result.
   * @throws {Error} Throws an error if the operation fails.
   */
  static generateViewEmployees(callback) {
    connection.query(
      "SELECT " +
        " employees.employee_id," +
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

  /**
   * Generates a list of menu items.
   *
   * @param {function} callback - The callback function to handle the result.
   * @throws {Error} Throws an error if the operation fails.
   */
  static generateMenuItems(callback) {
    connection.query(
      "SELECT " +
        " products.product_id," +
        "  products.product_name, " +
        "  products.price, " +
        "  products.category, " +
        "  products.product_description " +
        "FROM products;",

      (error, results) => {
        if (error) {
          return callback(error);
        }
        callback(null, results.rows);
      }
    );
  }

  /**
   * Generates a list of inventory items.
   *
   * @param {function} callback - The callback function to handle the result.
   * @throws {Error} Throws an error if the operation fails.
   */
  static generateInventoryItems(callback) {
    connection.query(
      "SELECT " +
        " inventory.inventory_id," +
        "  inventory.inventory_item, " +
        "  inventory.stock_level, " +
        "  inventory.restock_level, " +
        "  inventory.measurement_type, " +
        "  inventory.price " +
        "FROM inventory;",
      (error, results) => {
        if (error) {
          return callback(error);
        }
        callback(null, results.rows);
      }
    );
  }
}

module.exports = Report;
