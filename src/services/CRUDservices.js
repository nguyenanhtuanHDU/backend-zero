const connection = require('../configs/database')

const getAllUsers = async () => {
  const [results, fields] = await connection.execute('SELECT * FROM Users')
  return results
}
const getUserByID = async (userID) => {
  const [results, fields] = await connection.query(
    'SELECT * FROM Users WHERE id = ?',
    [userID]
  )
  let user = results && results.length > 0 ? results[0] : {}
  return user
}
const updateUserByID = async (myName, email, city, id) => {
  const [results, fields] = await connection.query(
    'UPDATE Users SET name = ?, email = ?, city = ? WHERE id = ?;',
    [myName, email, city, id]
  )
}
const deleteUserByID = async (id) => {
  const [results, fields] = await connection.query(
    'DELETE FROM Users WHERE id = ?',
    [id]
  )
}
module.exports = { getAllUsers, getUserByID, updateUserByID, deleteUserByID }
