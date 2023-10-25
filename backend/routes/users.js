var express = require('express');
var router = express.Router();
const connection = require('../connection')
var { loginController, registerController } = require('../controllers/userController');

// responds to localhost:3001/users/login request
router.get('/credentials', async (req, res) => {
    try {
      console.log('Creating connection');
      const conn = await connection.connect();
  
      console.log('Executing query for employee cred');
      const employeeCredentials = await conn.query('SELECT email, password from employees');
  
      console.log('Executing query for manager cred');
      const managerCredentials = await conn.query('SELECT email, password from managers');    
  
      console.log('Closing connection');
      conn.release(); // Release the connection back to the pool
  
      const credentials = {
          employees: employeeCredentials.rows,
          managers: managerCredentials.rows
      };
  
      // send the result array in data var
      // check App.js to see how this is handled
      res.json({ message: 'Connected to the PostgreSQL database', data: credentials });
  
      // res.send('this came from localhost:3001/employees');
    } catch (error) {
      console.error('Error connecting to the database:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

// router.post("/login", loginController);

module.exports = router;
