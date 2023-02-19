const Project = require('../models/Project');
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
  },
};
