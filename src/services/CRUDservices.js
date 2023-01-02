const connection = require('../configs/database')

const getAllUsers = async () => {
  const [results, fields] = await connection.execute('SELECT * FROM Users')
  console.log('>>>>>>> check results: ', results)
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
module.exports = { getAllUsers, getUserByID }
