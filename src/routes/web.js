const express = require('express')
const router = express.Router()
const {
  getHomePage,
  getText,
  getImg,
  postCreateUser,
  getCreatePage,
} = require('../controllers/homeController')

// router.METHOD('route', handle)

// khai báo route
router.get('/img', getImg)
router.get('/text', getText)
router.get('/', getHomePage)
router.post('/create-user', postCreateUser)
router.get('/create', getCreatePage)

module.exports = router
