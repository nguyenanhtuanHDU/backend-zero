const mongoose = require('mongoose')

const userSechema = new mongoose.Schema({
  //id auto create
  name: String,
  email: String,
  city: String,
})
const User = mongoose.model('user', userSechema)

module.exports = { User }
