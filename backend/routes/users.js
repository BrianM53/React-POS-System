var express = require('express');
var router = express.Router();
const connection = require('../connection')
var { loginController, registerController } = require('../controllers/userController');


// responds to localhost:3001/users/login request
router.post('/login', async (req, res) => {
  console.log(req.body);
  // const { email, password } = req.body;

  // try {
  //   const conn = await connection.connect();
  //   console.log('created connection');

  //   const employeeCredentials = await conn.query
  //     ('SELECT * FROM employees WHERE email = $1 AND password = $2', [email, password]);
  //   const managerCredentials = await conn.query
  //     ('SELECT * FROM managers WHERE email = $1 AND password = $2', [email, password]);

  //   conn.release(); 
  //   console.log('closed connection');

  //   if (employeeCredentials.rowCount > 0) {
  //     res.json({ isEmployee: true });
  //   } else if (managerCredentials.rowCount > 0) {
  //     res.json({ isManager: true });
  //   } else {
  //     res.json({ isEmployee: false, isManager: false });
  //   }

  // } catch (error) {
  //   console.error('Error connecting to the database:', error);
  //   res.status(500).json({ error: 'Internal Server Error' });
  // }
});


// router.post("/login", loginController);

module.exports = router;


