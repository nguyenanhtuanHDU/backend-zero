const connection = require('../configs/database')
const {
  getAllUsers,
  getUserByID,
  updateUserByID,
} = require('../services/CRUDservices')

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
  const user = await getUserByID(userID)
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
const postUpdateUser = async (req, res) => {
  const { myName, email, city, id } = req.body
  await updateUserByID(myName, email, city, id)
  res.redirect('/') // = router.get('/', getHomePage)
  // let listUsers = await getAllUsers()
  // res.render('home.ejs', { listUsers: listUsers })
}
module.exports = {
  getHomePage,
  getText,
  getImg,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
}
