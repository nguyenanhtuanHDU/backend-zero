const { json } = require('express')
const connection = require('../configs/database')

let users = []
const getHomePage = (req, res) => {
  connection.query('SELECT * FROM `Users`', function (err, results, fields) {
    users = results
    console.log(results)
    res.send(JSON.stringify(users))
    console.log('getHome =>> users', users)
  })
}

const getText = (req, res) => {
  res.send('Hello from text')
}

const getImg = (req, res) => {
  res.render('sample.ejs')
}

// exports nhiều function
module.exports = { getHomePage, getText, getImg }
