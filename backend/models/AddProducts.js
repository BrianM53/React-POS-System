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