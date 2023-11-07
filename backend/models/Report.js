const connection = require("../connection");

class Report {
    
    static generateSalesReport(startDate, endDate, callback) {
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
            "WITH usedStock AS (\r\n" + //
                    "    SELECT\r\n" + //
                    "        inventory.inventory_id,\r\n" + //
                    "        inventory.inventory_item,\r\n" + //
                    "        SUM(CASE WHEN orders.date_time >= ? AND orders.date_time <= ? THEN order_details.quantity * product_ingredients.quantity ELSE 0 END) AS total_used_between_timestamps\r\n" + //
                    "    FROM inventory\r\n" + //
                    "    INNER JOIN product_ingredients ON inventory.inventory_id = product_ingredients.inventory_id\r\n" + //
                    "    INNER JOIN order_details ON product_ingredients.product_id = order_details.product_id\r\n" + //
                    "    INNER JOIN orders ON order_details.order_id = orders.order_id\r\n" + //
                    "    WHERE orders.date_time >= ?\r\n" + //
                    "    GROUP BY inventory.inventory_id, inventory.inventory_item\r\n" + //
                    "),\r\n" + //
                    "\r\n" + //
                    "currentStock AS (\r\n" + //
                    "    SELECT\r\n" + //
                    "        inventory.inventory_id,\r\n" + //
                    "        SUM(inventory.stock_level) AS current_stock\r\n" + //
                    "    FROM inventory\r\n" + //
                    "    GROUP BY inventory.inventory_id\r\n" + //
                    ")\r\n" + //
                    "SELECT\r\n" + //
                    "    I.inventory_item,\r\n" + //
                    "    I.total_used_between_timestamps AS total_consumed,\r\n" + //
                    "    C.current_stock AS current_stock,\r\n" + //
                    "    (I.total_used_between_timestamps + C.current_stock) AS past_stock,\r\n" + //
                    "    ((I.total_used_between_timestamps * 1.0) / (I.total_used_between_timestamps + C.current_stock)) * 100 AS percent_sold\r\n" + //
                    "FROM usedStock AS I\r\n" + //
                    "INNER JOIN currentStock AS C ON I.inventory_id = C.inventory_id\r\n" + //
                    "WHERE ((I.total_used_between_timestamps * 1.0) / (I.total_used_between_timestamps + C.current_stock)) * 100 < 10;\r\n",
            [startDate, endDate, startDate],
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
