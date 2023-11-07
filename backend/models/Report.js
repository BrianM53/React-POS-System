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

    static generateRestockReport(startDate, endDate, callback) {
    }

    static generateExcessReport(startDate, endDate, callback) {
    }
}

module.exports = Report;
