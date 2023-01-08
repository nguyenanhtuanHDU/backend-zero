// const mysql = require('mysql2/promise')

// create connection to mysql database
// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT, // default: 3306
//   user: process.env.DB_USER,
//   database: process.env.DB_DATABASE,
//   password: process.env.DB_PASSWORD, // default: " " (empty)
// })

// const connection = mysql.createPool({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   database: process.env.DB_DATABASE,
//   password: process.env.DB_PASSWORD,
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// })

const mongoose = require('mongoose')

const res = [
  {
    status: 1,
    title: 'status 1',
  },
  {
    status: 2,
    title: 'status 2',
  },
  {
    status: 3,
    title: 'status 3',
  },
  {
    status: 4,
    title: 'status 4',
  },
]

const connection = async () => {
  try {
    console.log('>>> check')
    await mongoose.connect('mongodb://root:123456@localhost:27017')
    console.log('>>> check connect', mongoose.connection.readyState) // check status connection
  } catch (err) {
    console.log('>>> errr', err)
  }
}

module.exports = connection
