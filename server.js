const express = require('express')
// import express from 'express'
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (req, res) => {
  res.send('<h1>test title!</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
