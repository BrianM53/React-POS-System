const connection = require("../connection");

class Product {
  // Fetch all products
  /**
   * Fetches all products from the database.
   *
   * @param {function} callback - The callback function to handle the result.
   * @throws {Error} Throws an error if the operation fails.
   */
  static getAll(callback) {
    connection.query("SELECT * FROM products", (error, results) => {
      if (error) {
        return callback(error);
      }
      callback(null, results.rows);
    });
  }

  // Fetch products by category
  /**
   * Fetches products by category from the database.
   *
   * @param {string} category - The category of products to fetch.
   * @param {function} callback - The callback function to handle the result.
   * @throws {Error} Throws an error if the operation fails.
   */
  static getByCategory(category, callback) {
    connection.query(
      "SELECT * FROM products WHERE category = $1",
      [category],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        callback(null, results.rows);
      }
    );
  }

  // Fetch a product by its ID
  /**
   * Fetches a product by its ID from the database.
   *
   * @param {number} productId - The ID of the product to fetch.
   * @param {function} callback - The callback function to handle the result.
   * @throws {Error} Throws an error if the operation fails.
   */
  static getById(productId, callback) {
    connection.query(
      "SELECT * FROM products WHERE product_id = $1",
      [productId],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        callback(null, results.rows[0]);
      }
    );
  }

  // Add a new product
  /**
   * Adds a new product to the database.
   *
   * @param {string} productName - The name of the product.
   * @param {number} price - The price of the product.
   * @param {string} category - The category of the product.
   * @param {string} productDescription - The description of the product.
   * @param {function} callback - The callback function to handle the result.
   * @throws {Error} Throws an error if the operation fails.
   */
  static add(productName, price, category, productDescription, callback) {
    connection.query(
      "INSERT INTO products (product_name, price, category, product_description) VALUES ($1, $2, $3, $4)",
      [productName, price, category, productDescription],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        callback(null, true);
      }
    );
  }

  // Update a product
  /**
   * Updates a product in the database.
   *
   * @param {number} productId - The ID of the product to update.
   * @param {string} productName - The new name of the product.
   * @param {number} price - The new price of the product.
   * @param {string} category - The new category of the product.
   * @param {string} productDescription - The new description of the product.
   * @param {function} callback - The callback function to handle the result.
   * @throws {Error} Throws an error if the operation fails.
   */
  static update(
    productId,
    productName,
    price,
    category,
    productDescription,
    callback
  ) {
    connection.query(
      "UPDATE products SET product_name = $2, price = $3, category = $4, product_description = $5 WHERE product_id = $1",
      [productId, productName, price, category, productDescription],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        callback(null, true);
      }
    );
  }

  // Delete a product
  /**
   * Deletes a product from the database.
   *
   * @param {number} productId - The ID of the product to delete.
   * @param {function} callback - The callback function to handle the result.
   * @throws {Error} Throws an error if the operation fails.
   */
  static delete(productId, callback) {
    connection.query(
      "DELETE FROM products WHERE product_id = $1",
      [productId],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        callback(null, true);
      }
    );
  }

  /**
   * Fetches a product by its name from the database.
   *
   * @param {string} productName - The name of the product to fetch.
   * @param {function} callback - The callback function to handle the result.
   * @throws {Error} Throws an error if the operation fails.
   */
  static getByName(productName, callback) {
    connection.query(
      "SELECT * FROM products WHERE product_name = $1",
      [productName],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        callback(null, results.rows[0]);
      }
    );
  }  
}

module.exports = Product;
