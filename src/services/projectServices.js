const Project = require('../models/Project');

module.exports = {
  createAProject: async (data) => {
    const project = await Project.create({
      name: data.name,
      startDate: data.startDate,
      endDate: data.endDate,
      discription: data.discription,
      customerInfo: data.customerInfo,
      leader: data.leader,
    });
    return project;
  },
};
