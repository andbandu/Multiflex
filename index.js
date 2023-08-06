const express = require('express');

const app = express();

require('dotenv').config();
const db = require('./models/db');



// check database connection 
db.query('SELECT 1 + 1 AS solution', (error, results) => {
  if (error) {
    console.error('Database connection error:', error);
    return;
  }
  console.log('Database connection successful! The solution is:', results[0].solution);
});


const PORT = process.env.PORT || 3000;


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });