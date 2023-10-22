const { Pool } = require('pg');

// Create the connection pool, allows acquiring and releasing of connections
const connection = new Pool({
  user: 'csce315_903_01user',
  host: 'csce-315-db.engr.tamu.edu',
  database: 'csce315_903_01db',
  password: 'Jbold999',
});

module.exports = connection;
