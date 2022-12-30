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

const postCreateUser = (req, res) => {
  let { myName, city, email } = req.body
  connection.query(
    'INSERT into Users(name, email, city) values(?, ?, ?)',
    [myName, city, email],
    function (err, results) {
      console.log(results)
    }
  )
  res.send('create a new user')
}
// exports nhiều function
module.exports = { getHomePage, getText, getImg, postCreateUser }
