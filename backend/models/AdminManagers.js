const connection = require("../connection");

class AdminManagers {
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
      "INSERT INTO managers(first_name, last_name, phone, email, username, password) VALUES ($1, $2, $3, $4, $5, $6)",
      [first_name, last_name, phone, email, username, password],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        callback(null);
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

  static deleteManager(managerId, callback) 
  {
    const query = "DELETE FROM managers WHERE manager_id = $1";
    connection.query(query, [managerId], (error) => {
      if (error) 
      {
        console.error("Error deleting manager:", error);
        callback(error);
      } 
      else 
      {
        console.log("manager deleted successfully");
        callback(null);
      }
    });
  }


}
module.exports = AdminManagers;
