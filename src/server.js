require('dotenv').config()
const express = require('express') // import express from 'express'
const app = express()
const webRoute = require('./routes/web')
const route2 = require('./routes/route2')
const port = process.env.PORT || 8888
const configViewEngine = require('./configs/viewEngine.js')

// config template view engine
configViewEngine(app)

//khai báo route
app.use('/test', webRoute)
app.use('/v2', route2)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
