const { User } = require('../models/User')
const { updateUserByID, deleteUserByID } = require('../services/CRUDservices')

const getAPIPage = async (req, res) => {
  res.send('Hello from API')
}

const getUsersAPI = async (req, res) => {
  const users = await User.find()
  res.status(200).json({
    errorCode: 0,
    data: users,
  })
}

const postAUserAPI = async (req, res) => {
  let { name, city, email } = req.body
  const user = await User.create({ name, email, city })
  res.status(200).json({
    errorCode: 0,
    data: user,
  })
}

const putAUserAPI = async (req, res) => {
  const { name, email, city, id } = req.body
  const user = await updateUserByID(name, email, city, id)
  res.status(200).json({
    errorCode: 0,
    data: user,
  })
}

const deleteAUserAPI = async (req, res) => {
  const { id } = req.body
  const user = await User.deleteOne({ _id: id })
  res.status(200).json({
    errorCode: 0,
    data: user,
  })
}

module.exports = {
  getAPIPage,
  getUsersAPI,
  postAUserAPI,
  putAUserAPI,
  deleteAUserAPI,
}
