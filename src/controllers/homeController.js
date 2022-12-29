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

const postCreateUser = (req, res) => {
  console.log('req.body', req.body) // data from form
  res.send('create a new user')
}
// exports nhiều function
module.exports = { getHomePage, getText, getImg, postCreateUser }
