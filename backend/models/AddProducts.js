const connection = require("../connection");

class AddProducts {
  static addProduct(
    product_name,
    price,
    category,
    product_description,
    callback
  ) {
    connection.query(
      "INSERT INTO products(product_name, price, category, product_description) VALUES ($1, $2, $3, $4)",
      [product_name, price, category, product_description],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        callback(null);
      }
    );
  }

  // Add additional methods as needed

  // For example, if you need to check if a product already exists:
  static productExists(product_name, callback) {
    connection.query(
      "SELECT * FROM products WHERE product_name = $1",
      [product_name],
      (error, results) => {
        if (error) {
          return callback(error, null);
        }
        if (results.rows.length > 0) {
          return callback(null, true); // Product exists
        }
        callback(null, false);
      }
    );
  }
}

module.exports = AddProducts;