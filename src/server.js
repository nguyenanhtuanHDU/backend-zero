const express = require('express')
// import express from 'express'
const app = express()
const port = 8080
const path = require('path')

// config template engine
app.set('views', path.join(__dirname, 'views'))
// ./src do cùng cấp vs server.js
// path.join(__dirname, 'views'): hàm tự động tìm đến thư mục views ứng vs view engine(sample.ejs)
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (req, res) => {
  // res.send('<h1>test title!</h1>')
  res.render('sample.ejs')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
