const connection = require("../connection");

class AdminCustomers {
  static addCustomer(
    first_name,
    last_name,
    phone,
    email,
    callback
  ) {
    connection.query(
      "INSERT INTO customers(first_name, last_name, phone, email) VALUES ($1, $2, $3, $4)",
      [first_name, last_name, phone, email],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        callback(null, results);
      }
    );
  }

  static updateCustomer(
    customerId,
    first_name,
    last_name,
    phone,
    email,
    callback
  ) {
    connection.query(
      "UPDATE customers SET first_name = $2, last_name = $3, phone = $4, email = $5 WHERE customer_id = $1",
      [customerId, first_name, last_name, phone],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        callback(null);
      }
    );
  }

  static deleteCustomer(customerId, callback) 
  {
    const query = "DELETE FROM customers WHERE customer_id = $1";
    connection.query(query, [customerId], (error) => {
      if (error) 
      {
        console.error("Error deleting customer:", error);
        callback(error);
      } 
      else 
      {
        console.log("Customer deleted successfully");
        callback(null);
      }
    });
  }


  static generateViewCustomers(callback) 
  {
    connection.query(
      "SELECT " +
      " customers.customer_id," + 
      "  customers.first_name, " +
      "  customers.last_name, " +
      "  customers.phone, " +
      "  customers.email " +
      "FROM customers;",

      (error, results) => {
        if (error) {
          return callback(error);
        }
        callback(null, results.rows);
      }
    );
  }


}
module.exports = AdminCustomers;
