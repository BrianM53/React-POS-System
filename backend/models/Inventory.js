const connection = require("../connection");

class Inventory {
  static addInventoryItem(
    inventory_item,
    stock_level,
    restock_level,
    measurement_type,
    price,
    callback
  ) {
    connection.query(
      "INSERT INTO inventory_items(inventory_item, stock_level, restock_level, measurement_type, price) VALUES ($1, $2, $3, $4, $5)",
      [inventory_item, stock_level, restock_level, measurement_type, price],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        callback(null);
      }
    );
  }

  static inventoryItemExists(inventory_item, callback) {
    connection.query(
      "SELECT * FROM inventory_items WHERE inventory_item = $1",
      [inventory_item],
      (error, results) => {
        if (error) {
          return callback(error, null);
        }
        if (results.rows.length > 0) {
          return callback(null, true);
        }
        callback(null, false);
      }
    );
  }
}

module.exports = Inventory;