const express = require('express')
const router = express.Router()
const {
  getHomePage,
  getText,
  getImg,
} = require('../controllers/homeController')

// router.METHOD('route', handle)

// khai báo route
router.get('/img', getImg)
router.get('/text', getText)
router.get('/', getHomePage)

module.exports = router
