const connection = require("../connection");

class Employee {

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
      "INSERT INTO employees(first_name, last_name, phone, email, username, password) VALUES ($1, $2, $3, $4, $5, $6)",
      [first_name, last_name, phone, email, username, password],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        callback(null, results.rows[0]);
      }
    );
  }

  /**
   * Checks if an email already exists in the employees table.
   *
   * @param {string} email - The email to check.
   * @param {function} callback - The callback function to handle the result.
   */

  static emailExists(email, callback) {
    connection.query(
      "SELECT * FROM employees WHERE email = $1",
      [email],
      (error, results) => {
        if (error) {
          return callback(error, null);
        }
        if (results.rows.length > 0) {
          return callback(null, true); // Email exists
        }
        callback(null, false);
      }
    );
  }
}
module.exports = Employee;
