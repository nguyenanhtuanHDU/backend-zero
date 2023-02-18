const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: String,
  startDate: String,
  endDate: String,
  discription: String,
});

const userSechema = new mongoose.Schema({
  name: String,
  email: String,
  city: String,
});

const taskSchema = new mongoose.Schema(
  {
    name: {
      require: true,
      type: String,
    },
    discription: String,
    status: String,
    startDate: String,
    endDate: String,
    userInfo: userSechema,
    projectInfo: projectSchema,
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model('project', taskSchema);
