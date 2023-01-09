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

const dbState = [
  {
    value: 0,
    label: 'disconnected',
  },
  {
    value: 1,
    label: 'connected',
  },
  {
    value: 2,
    label: 'connecting',
  },
  {
    value: 3,
    label: 'disconnecting',
  },
]

const connection = async () => {
  try {
    const options = {
      user: process.env.DB_USER,
      pass: process.env.DB_PASSWORD,
      dbName: process.env.DB_DATABASE,
      // dbName: 'nodejs-mongdb',
    }
    // await mongoose.connect('mongodb://root:123456@localhost:27017')
    await mongoose.connect(process.env.DB_HOST, options)
    const state = Number(mongoose.connection.readyState)
    console.log(
      '>>> check connnect',
      dbState.find((f) => f.value == state).label,
      'to db'
    )
  } catch (err) {
    console.log('>>> errr', err)
  }
}

module.exports = connection
