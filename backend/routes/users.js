var express = require('express');
var router = express.Router();
var jwtDecode = require('jwt-decode');
const { OAuth2Client } = require('google-auth-library');

const connection = require('../connection')

const clientID = "646591237506-j4196n8a0k2tqoaaqclv314puj8q6i3n.apps.googleusercontent.com";

// responds to localhost:3001/users/login request
router.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log("email: " + email + " password: " + password);
    const conn = await connection.connect();
    console.log('created connection');

    const employeeCredentials = await conn.query
      ('SELECT * FROM employees WHERE email = $1 AND password = $2', [email, password]);
    const managerCredentials = await conn.query
      ('SELECT * FROM managers WHERE email = $1 AND password = $2', [email, password]);

    conn.release(); 
    console.log('closed connection');

    if (employeeCredentials.rowCount > 0) {
      res.json({ isManager: false, isCashier: true });
    } else if (managerCredentials.rowCount > 0) {
      res.json({ isManager: true, isCashier: false });
    } else {
      res.json({ isCashier: false, isManager: false });
    }

  } catch (error) {
    console.error('Error connecting to the database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

async function verifyToken(client_id, jwtToken) {
  const client = new OAuth2Client(client_id);

  const ticket = await client.verifyIdToken({
      idToken: jwtToken,
      audience: client_id,
  });

  console.log("Token has been validated.");
  const payload = ticket.getPayload();
  return payload;
}

router.post('/auth/google-login', async (req, res) => {
  var jwtToken = Object.keys(req.body)[0];
  try {
    // wait for token verification to finish
    const payload = await verifyToken(clientID, jwtToken); 
    if (payload) {
      // console.log("Name:", payload.name);
      // console.log("Email:", payload.email);

      const conn = await connection.connect();
      console.log('created connection');

      const employeeCredentials = await conn.query
        ('SELECT * FROM employees WHERE email = $1', [payload.email]);
      const managerCredentials = await conn.query
        ('SELECT * FROM managers WHERE email = $1', [payload.email]);

      conn.release(); 

      if (employeeCredentials.rowCount > 0) {
        res.json({ isManager: false, isCashier: true });
      } else if (managerCredentials.rowCount > 0) {
        res.json({ isManager: true, isCashier: false });
      } else {
        res.json({ isCashier: false, isManager: false });
      }

      res.json({ success: true, email: payload.email, name: payload.name });
    } else {
      console.log("Verification failed");
      res.status(401).json({ error: "Google token verification failed" });
    }
  } catch (error) {
    console.error("Error verifying Google token:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


module.exports = router;