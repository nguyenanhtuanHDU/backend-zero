const connection = require('../configs/database')
const { getAllUsers } = require('../services/CRUDservices')

const getHomePage = async (req, res) => {
  const results = await getAllUsers()
  return res.render('home.ejs', { listUsers: results })
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
const getUpdatePage = async (req, res) => {
  const userID = req.params.id
  const [results, fields] = await connection.query(
    'SELECT * FROM Users WHERE id = ?',
    [userID]
  )
  let user = results && results.length > 0 ? results[0] : {}
  res.render('edit.ejs', { user: user })
}

const postCreateUser = async (req, res) => {
  let { myName, city, email } = req.body

  const [results, fields] = await connection.query(
    'INSERT into Users(name, email, city) values(?, ?, ?)',
    [myName, city, email]
  )
  res.send('create a new user')
}
module.exports = {
  getHomePage,
  getText,
  getImg,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
}
