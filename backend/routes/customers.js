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

  router.post('/new-customer', async (req, res) => {
    try {
      const { email, firstName = '', lastName = '', phone = '' } = req.body; // Retrieve details from request body
  
      // Check if email is provided
      if (!email) {
        return res.status(400).json({ error: 'Email is required' });
      }
  
      // Fetch the next available customer ID
      const nextCustomerIdQuery = 'SELECT MAX(customer_id) + 1 AS next_customer_id FROM customers';
      const { rows: nextIdRows } = await connection.query(nextCustomerIdQuery);
      const nextCustomerId = nextIdRows[0].next_customer_id || 1;
  
      // Insert the new customer into the database
      const insertQuery = `
        INSERT INTO customers(customer_id, first_name, last_name, phone, email)
        VALUES ($1, $2, $3, $4, $5)
      `;
      await connection.query(insertQuery, [nextCustomerId, firstName, lastName, phone, email]);
  
      return res.status(200).json({ customerID: nextCustomerId });
    } catch (error) {
      console.error('Error inserting new customer:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  module.exports = router;
