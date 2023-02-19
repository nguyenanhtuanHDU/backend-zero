const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: String,
  phone: String,
  email: String,
  image: String,
  description: String,
});

const userSechema = new mongoose.Schema({
  name: String,
  email: String,
  city: String,
});

const projectSchema = new mongoose.Schema(
  {
    name: {
      require: true,
      type: String,
    },
    startDate: String,
    endDate: String,
    discription: String,
    customerInfo: customerSchema,
    userInfo: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
    leader: userSechema,
    task: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model('project', projectSchema);

module.exports = Project
