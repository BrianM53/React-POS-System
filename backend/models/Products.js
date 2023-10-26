const connection = require("../connection");

class Product {
  // Fetch all products
  static getAll(callback) {
    connection.query("SELECT * FROM products", (error, results) => {
      if (error) {
        return callback(error);
      }
      callback(null, results.rows);
    });
  }

  // Fetch products by category
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
}

module.exports = Product;
