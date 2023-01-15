const connection = require('../configs/database')
const { User } = require('../models/User')
const {
  getUserByID,
  updateUserByID,
  deleteUserByID,
} = require('../services/CRUDservices')

const getHomePage = async (req, res) => {
  const results = await User.find()
  return res.render('home.ejs', { listUsers: results })
}

const getCreatePage = (req, res) => {
  res.render('create.ejs')
}
const postCreateUser = async (req, res) => {
  let { name, city, email } = req.body

  // await User.create({ name: name, email: email, city: city })
  await User.create({ name, email, city })

  res.redirect('/')
}
const getUpdatePage = async (req, res) => {
  const userID = req.params.id
  const user = await getUserByID(userID)
  res.render('edit.ejs', { user: user })
}

const postUpdateUser = async (req, res) => {
  const { name, email, city, id } = req.body
  await updateUserByID(name, email, city, id)
  res.redirect('/') // = router.get('/', getHomePage)
}
const getDeletePage = async (req, res) => {
  const user = await getUserByID(req.params.id)
  res.render('delete.ejs', { user: user })
}
const postDeleteUser = async (req, res) => {
  const id = req.body.id
  await deleteUserByID(id)
  res.redirect('/')
}

module.exports = {
  getHomePage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  getDeletePage,
}
