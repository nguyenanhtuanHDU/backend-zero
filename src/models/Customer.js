const customerSchema = new Schema(
  {
    name: { type: String, require },
    address: String,
    phone: String,
    email: String,
    image: String,
    description: String,
  },
  { timestamps: true }
)
const Customer = mongoose.model('customer', customerSchema)

module.exports = Customer
