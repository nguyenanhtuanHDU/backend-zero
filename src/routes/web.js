const express = require('express')

const router = express.Router()

// khai báo route
router.get('/img', (req, res) => {
  res.render('sample.ejs')
})
router.get('/text', (req, res) => {
  res.send('<h1>Hello from text</h1>')
})

router.get('/', (req, res) => {
  res.send('Hello World!')
})

module.exports = router
