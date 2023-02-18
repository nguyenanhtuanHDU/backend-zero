const Project = require('../models/Project');
const { createAProject } = require('../services/projectServices');

module.exports = {
  postCreateProject: async (req, res) => {
    try {
      console.log('>>> req.body: ', req.body);
      const data = req.body;
      const project = await createAProject(data);
      res.status(200).json({
        EC: 0,
        data: project,
      });
    } catch (error) {
      console.log(error);
      res.status(404).json({
        EC: -1,
        data: null,
      });
    }
  },
};
