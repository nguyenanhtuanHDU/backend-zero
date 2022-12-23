const getHomePage = (req, res) => {
  res.send('Hello from home page')
}

const getText = (req, res) => {
  res.send('Hello from text')
}

const getImg = (req, res) => {
  res.render('sample.ejs')
}

// exports nhiều function
module.exports = { getHomePage, getText, getImg }
