require('dotenv').config()
const mysql = require('mysql2')
const express = require('express') // import express from 'express'
const app = express()
const webRoute = require('./routes/web')
const route2 = require('./routes/route2')
const port = process.env.PORT || 8888
const configViewEngine = require('./configs/viewEngine.js')

// config template view engine
configViewEngine(app)

//khai báo route
app.use('/', webRoute)
app.use('/v2', route2)

// test connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT, // default: 3306
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD, // default: " " (empty)
})

connection.query('SELECT * FROM `Users`', function (err, results, fields) {
  console.log(results) // results contains rows returned by server
  // console.log(fields) // fields contains extra meta data about results, if available
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
