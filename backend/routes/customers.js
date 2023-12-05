var express = require("express");
var router = express.Router();
const connection = require("../connection");

router.get('/:customerEmail', async (req, res) => {
    try {
      const email = req.params.customerEmail; // Retrieve email from URL parameters
    
      if (!email) {
        return res.status(400).json({ error: 'Email is required' });
      }
    
      const query = 'SELECT customer_id FROM customers WHERE email = $1';
      const { rows } = await connection.query(query, [email]);
    
      if (rows.length === 0) {
        return res.status(404).json({ error: 'Customer not found' });
      }
    
      const customerId = rows[0].customer_id;
      return res.status(200).json({ customerID: customerId });
    } catch (error) {
      console.error('Error fetching customerID:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  module.exports = router;