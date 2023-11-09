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
            WHERE ((I.total_used_between_timestamps * 1.0) / (I.total_used_between_timestamps + C.current_stock)) * 100 < 10;`,
            [startDate, endDate, startDate],
            (error, results) => {
                if (error) {
                    return callback(error);
                }
                callback(null, results.rows);
            }
        );
    }
    

    static generateSellsTogether(startDate, endDate, callback) {
        connection.query(
            "SELECT product1.product_id AS productID1, product2.product_id AS productID2, productsJoin1.product_name, productsJoin2.product_name, COUNT(*) AS frequency " +
                "FROM orders " +
                "INNER JOIN order_details AS product1 ON orders.order_id = product1.order_id " +
                "INNER JOIN order_details AS product2 ON orders.order_id = product2.order_id " +
                "INNER JOIN products AS productsJoin1 ON productsJoin1.product_id = product1.product_id " +
                "INNER JOIN products AS productsJoin2 ON productsJoin2.product_id = product2.product_id " +
                "WHERE orders.date_time BETWEEN $1::timestamp AND $2::timestamp AND product1.product_id <> product2.product_id " +
                "GROUP BY product1.product_id, product2.product_id, productsJoin1.product_name, productsJoin2.product_name " +
                "ORDER BY frequency DESC;", //
            [startDate, endDate],        
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
