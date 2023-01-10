require('dotenv').config()
const express = require('express') // import express from 'express'
const app = express()
const webRoute = require('./routes/web')
const route2 = require('./routes/route2')

const port = process.env.PORT || 8888
const configViewEngine = require('./configs/viewEngine.js')
const connection = require('./configs/database')
const { Kitten } = require('./models/Kitten')

// config template view engine
configViewEngine(app)

// config req.body: get data from form
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

//khai báo route
app.use('/', webRoute)
app.use('/v2', route2)

const cat = new Kitten({ name: 'concac' })
cat.save()
;(async () => {
  await connection()
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
})() // anonymous function
