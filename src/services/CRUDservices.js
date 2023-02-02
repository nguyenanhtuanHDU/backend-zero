const connection = require('../configs/database')
const { User } = require('../models/User')

const getAllUsers = async () => {
  const [results, fields] = await connection.execute('SELECT * FROM Users')
  return results
}
const getUserByID = async (userID) => {
  const user = await User.findById(userID)
  return user
}
const updateUserByID = async (name, email, city, id) => {
  const userEdit =  await User.updateOne({ _id: id }, { name: name, email: email, city: city })
  return userEdit
}
const deleteUserByID = async (id) => {
  await User.deleteOne({ _id: id.trim() })
}
module.exports = { getAllUsers, getUserByID, updateUserByID, deleteUserByID }
