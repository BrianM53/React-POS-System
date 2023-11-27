const connection = require("../connection");

class Employee {
  static addEmployee(
    firstName,
    lastName,
    phone,
    email,
    username,
    password,
    callback
  ) {
    connection.query(
      "INSERT INTO employees(first_name, last_name, phone, email, username, password) VALUES ($1, $2, $3, $4, $5, $6)",
      [firstName, lastName, phone, email, username, password],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        callback(null, results.rows[0]);
      }
    );
  }
}
module.exports = Employee;
