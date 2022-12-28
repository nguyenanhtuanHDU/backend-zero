const mysql = require('mysql2')

// create connection to mysql database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT, // default: 3306
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD, // default: " " (empty)
})

module.exports = connection
