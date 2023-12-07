const connection = require("../connection");

class AdminEmployees {
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
   * Deletes an employee from the database.
   *
   * @param {number} employeeId - The ID of the employee to delete.
   * @param {function} callback - The callback function to handle the result.
   */
  static deleteEmployee(employeeId, callback) {
    connection.query(
      "DELETE FROM employees WHERE employee_id = $1 RETURNING *",
      [employeeId],
      (error, result) => {
        if (error) {
          return callback(error, null);
        }
        const deletedEmployee = result.rows[0];
        callback(null, deletedEmployee);
      }
    );
  }

  /**
   * Updates employee information in the database.
   *
   * @param {number} employeeId - The ID of the employee to update.
   * @param {string} first_name - The new first name of the employee.
   * @param {string} last_name - The new last name of the employee.
   * @param {string} phone - The new phone number of the employee.
   * @param {string} email - The new email of the employee.
   * @param {string} username - The new username of the employee.
   * @param {string} password - The new password of the employee.
   * @param {function} callback - The callback function to handle the result.
   */

  static updateEmployee(
    employeeId,
    first_name,
    last_name,
    phone,
    email,
    username,
    password,
    callback
  ) {
    connection.query(
      "UPDATE employees SET first_name = $2, last_name = $3, phone = $4, email = $5, username = $6, password = $7 WHERE employee_id = $1",
      [employeeId, first_name, last_name, phone, email, username, password],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        callback(null);
      }
    );
  }

  /**
   * Retrieves a list of employees from the database.
   *
   * @param {function} callback - The callback function to handle the result.
   */
  static generateViewEmployees(callback) 
  {
    connection.query(
      "SELECT " +
      " employees.employee_id," + 
      "  employees.first_name, " +
      "  employees.last_name, " +
      "  employees.phone, " +
      "  employees.email, " +
      "  employees.username, " +
      "  employees.password " +
      "FROM employees;",

      (error, results) => {
        if (error) {
          return callback(error);
        }
        callback(null, results.rows);
      }
    );
  }
}


module.exports = AdminEmployees;
