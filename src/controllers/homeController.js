const connection = require('../configs/database')

const getHomePage = (req, res) => {
  return res.render('home.ejs')
}

const getText = (req, res) => {
  res.send('Hello from text')
}

const getImg = (req, res) => {
  res.render('sample.ejs')
}
const getCreatePage = (req, res) => {
  res.render('create.ejs')
}
const postCreateUser = async (req, res) => {
  let { myName, city, email } = req.body

  const [results, fields] = await connection.query(
    'INSERT into Users(name, email, city) values(?, ?, ?)',
    [myName, city, email]
  )
  console.log('>>>>> results', results) // rows are data

  res.send('create a new user')
}
// exports nhiều function
module.exports = { getHomePage, getText, getImg, postCreateUser, getCreatePage }
