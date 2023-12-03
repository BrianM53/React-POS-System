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
      "INSERT INTO inventory(inventory_item, stock_level, restock_level, measurement_type, price) VALUES ($1, $2, $3, $4, $5)",
      [inventory_item, stock_level, restock_level, measurement_type, price],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        callback(null);
      }
    );
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

module.exports = Inventory;