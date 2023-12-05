const connection = require("../connection");

class AdminEmployees {
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
