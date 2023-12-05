const connection = require("../connection");

class AdminManagers {

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

  static deleteManager(managerId, callback) {
    connection.query(
      "DELETE FROM managers WHERE manager_id = $1 RETURNING *",
      [managerId],
      (error, result) => {
        if (error) {
          return callback(error, null);
        }
        const deletedManager = result.rows[0];
        callback(null, deletedManager);
      }
    );
  }

  static updateManager(
    managerId,
    first_name,
    last_name,
    phone,
    email,
    username,
    password,
    callback
  ) {
    connection.query(
      "UPDATE managers SET first_name = $2, last_name = $3, phone = $4, email = $5, username = $6, password = $7 WHERE manager_id = $1",
      [managerId, first_name, last_name, phone, email, username, password],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        callback(null);
      }
    );
  }

  static generateViewManagers(callback) 
  {
    connection.query(
      "SELECT " +
      " managers.manager_id," + 
      "  managers.first_name, " +
      "  managers.last_name, " +
      "  managers.phone, " +
      "  managers.email, " +
      "  managers.username, " +
      "  managers.password " +
      "FROM managers;",

      (error, results) => {
        if (error) {
          return callback(error);
        }
        callback(null, results.rows);
      }
    );
  }
}


module.exports = AdminManagers;
