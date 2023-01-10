const mongoose = require('mongoose')

// config shape data
const kittySchema = new mongoose.Schema({
  name: String,
})

const Kitten = mongoose.model('Kitten', kittySchema) // create collection : table (sql)
// const cat = new Kitten({ name: 'Tuan cat' })
// cat.save()

module.exports = { Kitten }
