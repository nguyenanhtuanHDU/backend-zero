const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema(
  {
    name: { type: String, require },
    address: String,
    phone: String,
    email: String,
    image: String,
    description: String,
  },
  { timestamps: false } // createAt, updatedAt
)
const Customer = mongoose.model('customer', customerSchema)

module.exports = Customer
