const { json } = require('express')
// const connection = require('../configs/database')

const getHomePage = (req, res) => {
  return res.render('home.ejs')
}

const getText = (req, res) => {
  res.send('Hello from text')
}

const getImg = (req, res) => {
  res.render('sample.ejs')
}

// exports nhiều function
module.exports = { getHomePage, getText, getImg }
