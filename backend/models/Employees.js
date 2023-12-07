const connection = require("../connection");

class Employees {
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
        callback(null);
      }
    );
  }

  /**
   * Updates an existing employee in the database.
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
   * Deletes an employee from the database.
   *
   * @param {number} employeeId - The ID of the employee to delete.
   * @param {function} callback - The callback function to handle the result.
   */
  static deleteEmployee(employeeId, callback) 
  {
    const query = "DELETE FROM employees WHERE employee_id = $1";
    connection.query(query, [employeeId], (error) => {
      if (error) 
      {
        console.error("Error deleting employee:", error);
        callback(error);
      } 
      else 
      {
        console.log("Employee deleted successfully");
        callback(null);
      }
    });
  }


}
module.exports = Employees;
