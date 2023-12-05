const connection = require("../connection");

class AdminCustomers {
  
  static addEmployee(
    first_name,
    last_name,
    phone,
    email,
    username,
    password,
    callback
  ) {
    connection.query(
        "INSERT INTO employees(first_name, last_name, phone, email, username, password) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
        [first_name, last_name, phone, email, username, password],
        (error, result) => {
        if (error) {
            return callback(error, null);
        }
        const addedEmployee = result.rows[0];
        callback(null, addedEmployee);
        }
    );
  }

  static addManager(
    first_name,
    last_name,
    phone,
    email,
    username,
    password,
    callback
  ) {
      connection.query(
          "INSERT INTO managers(first_name, last_name, phone, email, username, password) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
          [first_name, last_name, phone, email, username, password],
          (error, result) => {
              if (error) {
                  return callback(error, null);
              }
              const addedManager = result.rows[0];
              callback(null, addedManager);
          }
      );
  }
  
  static addCustomer(
    first_name,
    last_name,
    phone,
    email,
    callback
    ) {
        connection.query(
            "INSERT INTO customers(first_name, last_name, phone, email) VALUES ($1, $2, $3, $4) RETURNING *",
            [first_name, last_name, phone, email],
            (error, result) => {
                if (error) {
                    return callback(error, null);
                }
                const addedCustomer = result.rows[0];
                callback(null, addedCustomer);
            }
        );
    }

  static deleteCustomer(customerId, callback) {
    connection.query(
      "DELETE FROM customers WHERE customer_id = $1 RETURNING *",
      [customerId],
      (error, result) => {
        if (error) {
          return callback(error, null);
        }
        const deletedCustomer = result.rows[0];
        callback(null, deletedCustomer);
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
      [customerId, first_name, last_name, phone, email],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        callback(null);
      }
    );
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
