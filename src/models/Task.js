const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');

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

taskSchema.plugin(mongoose_delete);

const Task = mongoose.model('task', taskSchema);
module.exports = Task
