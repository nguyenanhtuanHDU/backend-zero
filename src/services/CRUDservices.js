const connection = require('../configs/database')

const getAllUsers = async () => {
  const [results, fields] = await connection.execute('SELECT * FROM Users')
  console.log('>>>>>>> check results: ', results)
  return results
}

module.exports = { getAllUsers }
