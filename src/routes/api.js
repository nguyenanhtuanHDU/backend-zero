const express = require('express')
const router = express.Router()
const {
  getAPIPage,
  getUsersAPI,
  postAUserAPI,
} = require('../controllers/apiController')

router.get('/', getAPIPage)

router.get('/users', getUsersAPI)
router.post('/users', postAUserAPI)
module.exports = router
