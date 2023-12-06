const connection = require("../connection");

class Employee {
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
