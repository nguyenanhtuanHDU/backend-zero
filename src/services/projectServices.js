const Project = require('../models/Project');
const Task = require("../models/Task");
const User = require("../models/User")

module.exports = {
  getAllProjectServices: async (data) => {
    console.log('>>> data: ', data);
    const projects = await Project.find(data.filter).populate(data.population).limit(data.limit).exec()
    return projects
  },
  createAProjectService: async (data) => {
    if (data.type == 'ADD-PROJECT') {
      const project = await Project.create({
        name: data.name,
        startDate: data.startDate,
        endDate: data.endDate,
        discription: data.discription,
        customerInfo: data.customerInfo,
        leader: data.leader,
      });
      return project;
    }
    if (data.type === 'ADD-USERID') {
      const project = await Project.findById({ _id: data.projectId })
      const user = await User.findById({ _id: data.userId })
      if (!user) {
        return null;
      }
      project.userInfo.push(data.userId)
      await project.save();
      return project
    }
    if (data.type === 'REMOVE-USER') {
      const project = await Project.findById({ _id: data.projectId })
      const user = await User.find({ _id: data.userId })
      if (!user) return
      project.userInfo.map(item => {
        if (data.userId == item) {
          console.log('>>> item: ', item);
          project.userInfo.pull(item)
        }
      })
      const newProject = await project.save()
      return newProject
    }
    if (data.type === 'ADD_TASK') {
      const project = await Project.findById(data.projectId)
      console.log('>>> project: ', project);
      const task = await Task.findById(data.taskId)
      if (project && task) {
        data.taskId.map(async item => {
          await project.task.push(item)
        })
        await project.save()
        return project
      }

    }
  },
  updateProjectService: async (data) => {
    const project = await Project.updateOne({ _id: data.id }, {
      name: data.name,
      startDate: data.name,
      endDate: data.endDate,
      discription: data.discription
    })
    return project
  },
  deleteAProjectService: async (id) => {
    const project = await Project.delete({ _id: id })
    return project
  }
};
