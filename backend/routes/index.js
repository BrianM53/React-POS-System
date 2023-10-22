var express = require('express');
var router = express.Router();

// const connection = require('../connection'); // Import the connection pool

// router.get('/test', async (req, res) => {
//   try {
//     // Acquire a connection from the pool
//     const client = await connection.connect();
//     console.log("created connection");

//     // Execute a query
//     const result = await client.query('SELECT NOW() as now');
    
//     // Release the connection back to the pool
//     client.release();
//     console.log("released");

//     res.json(result.rows[0]);
//   } catch (err) {
//     console.error('Error:', err);
//     res.status(500).send('An error occurred');
//   }
// });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
