const connection = require("../connection");

class AddProducts {
    /**
   * Adds a new product to the database.
   *
   * @param {string} product_name - The name of the product.
   * @param {number} price - The price of the product.
   * @param {string} category - The category of the product.
   * @param {string} product_description - The description of the product.
   * @param {function} callback - The callback function to handle the result.
   */
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

  /**
   * Updates an existing product in the database.
   *
   * @param {number} productId - The ID of the product to update.
   * @param {string} product_name - The new name of the product.
   * @param {number} price - The new price of the product.
   * @param {string} category - The new category of the product.
   * @param {string} product_description - The new description of the product.
   * @param {function} callback - The callback function to handle the result.
   */
  static updateProduct(
    productId,
    product_name,
    price,
    category,
    product_description,
    callback
  ) {
    connection.query(
      "UPDATE products SET product_name = $2, price = $3, category = $4, product_description = $5 WHERE product_id = $1",
      [productId, product_name, price, category, product_description],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        callback(null);
      }
    );
}

 /**
   * Deletes a product from the database.
   *
   * @param {number} menuItemId - The ID of the product to delete.
   * @param {function} callback - The callback function to handle the result.
   */
  static deleteProduct(menuItemId, callback) 
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

}

module.exports = AddProducts;