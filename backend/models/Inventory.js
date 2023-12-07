const connection = require("../connection");

class Inventory {
  /**
   * Adds an inventory item to the database.
   *
   * @param {string} inventory_item - The name of the inventory item.
   * @param {number} stock_level - The current stock level of the inventory item.
   * @param {number} restock_level - The restock level of the inventory item.
   * @param {string} measurement_type - The measurement type of the inventory item.
   * @param {number} price - The price of the inventory item.
   * @param {function} callback - The callback function to handle the result.
   */
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

  /**
   * Updates an existing inventory item in the database.
   *
   * @param {number} inventoryId - The ID of the inventory item to update.
   * @param {string} inventory_item - The new name of the inventory item.
   * @param {number} stock_level - The new stock level of the inventory item.
   * @param {number} restock_level - The new restock level of the inventory item.
   * @param {string} measurement_type - The new measurement type of the inventory item.
   * @param {number} price - The new price of the inventory item.
   * @param {function} callback - The callback function to handle the result.
   */
  static updateInventory(
    inventoryId,
    inventory_item,
    stock_level,
    restock_level,
    measurement_type,
    price,
    callback
  ) {
    connection.query(
      "UPDATE inventory SET inventory_item = $2, stock_level = $3, restock_level = $4, measurement_type = $5, price = $6 WHERE inventory_id = $1",
      [inventoryId, inventory_item, stock_level, restock_level, measurement_type, price],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        callback(null);
      }
    );
  }

  /**
   * Deletes an inventory item from the database.
   *
   * @param {number} inventoryItemId - The ID of the inventory item to delete.
   * @param {function} callback - The callback function to handle the result.
   */
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