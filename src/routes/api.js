const express = require('express')
const router = express.Router()
const { User } = require('../models/User')
const { getAPIPage, getUsersAPI } = require('../controllers/apiController')

router.get('/', getAPIPage)

router.get('/test1', async (req, res) => {
  res.status(200).json({
    // status code
    name: 'tuan', // body
  })
})

router.get('/users', getUsersAPI)
module.exports = router
