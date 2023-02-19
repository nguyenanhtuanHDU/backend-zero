const { createAProjectService, getAllProjectServices } = require('../services/projectServices');

const aqp = require('api-query-params');
const { getAllCustomersService } = require("../services/customerService");

module.exports = {
  getAllProject: async(req, res) => {
    const query = aqp(req.query);
    const page = req.query.page
    delete query.filter.page
    
    console.log('>>> query: ', query);
    const projects = await getAllProjectServices(query)
    res.status(200).json({
      EC: 0,
      data: projects
    })
  },
  postCreateProject: async (req, res) => {
    try {
      const data = req.body;
      const project = await createAProjectService(data);
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
