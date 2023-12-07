const connection = require("../connection");

class AdminCustomers {
  
  /**
   * Adds an employee to the database.
   *
   * @param {string} first_name - The first name of the employee.
   * @param {string} last_name - The last name of the employee.
   * @param {string} phone - The phone number of the employee.
   * @param {string} email - The email of the employee.
   * @param {string} username - The username of the employee.
   * @param {string} password - The password of the employee.
   * @param {function} callback - The callback function to handle the result.
   */
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

  /**
   * Adds a manager to the database.
   *
   * @param {string} first_name - The first name of the manager.
   * @param {string} last_name - The last name of the manager.
   * @param {string} phone - The phone number of the manager.
   * @param {string} email - The email of the manager.
   * @param {string} username - The username of the manager.
   * @param {string} password - The password of the manager.
   * @param {function} callback - The callback function to handle the result.
   */
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
  
  /**
   * Adds a customer to the database.
   *
   * @param {string} first_name - The first name of the customer.
   * @param {string} last_name - The last name of the customer.
   * @param {string} phone - The phone number of the customer.
   * @param {string} email - The email of the customer.
   * @param {function} callback - The callback function to handle the result.
   */
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

    /**
   * Deletes a customer from the database.
   *
   * @param {number} customerId - The ID of the customer to delete.
   * @param {function} callback - The callback function to handle the result.
   */
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

  /**
   * Updates customer information in the database.
   *
   * @param {number} customerId - The ID of the customer to update.
   * @param {string} first_name - The new first name of the customer.
   * @param {string} last_name - The new last name of the customer.
   * @param {string} phone - The new phone number of the customer.
   * @param {string} email - The new email of the customer.
   * @param {function} callback - The callback function to handle the result.
   */
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

  /**
   * Retrieves a list of customers from the database.
   *
   * @param {function} callback - The callback function to handle the result.
   */
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
