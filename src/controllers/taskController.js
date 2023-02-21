const { createATaskService, updateATaskService, deleteTaskService, getAllTaskService } = require("../services/taskService")
const aqp = require('api-query-params');
const Task = require("../models/Task");

module.exports = {
    getAllTasks: async (req, res) => {
        try {
            const { page } = req.query
            const queryString = aqp(req.query);
            const { limit } = queryString
            const skip = (page - 1) * limit
            const tasks = await Task.find({}).skip(skip).limit(limit).exec()
            res.status(200).json({
                EC: 0,
                data: tasks
            })
        } catch (error) {
            console.log(error);
            res.status(404).json({
                EC: -1,
                data: null,
            });
        }
    },
    postCreateTask: async (req, res) => {
        try {
            const { type, data } = req.body
            if (type === 'EMPTY_TYPE') {
                const task = await createATaskService(data)
                res.status(200).json({
                    EC: 0,
                    data: task
                })
            }
        } catch (error) {
            console.log(error);
            res.status(404).json({
                EC: -1,
                data: null,
            });
        }

    },
    putUpdateTask: async (req, res) => {
        try {
            const task = await updateATaskService(req.body)
            res.status(200).json({
                EC: 0,
                data: task
            })
        } catch (error) {
            console.log(error);
            res.status(404).json({
                EC: -1,
                data: null,
            });
        }
    },
    deleteTask: async (req, res) => {
        try {
            console.log('>>> req.body.id: ', req.body.id);
            const task = await deleteTaskService(req.body.id)
            res.status(200).json({
                EC: 0,
                data: task
            })
        } catch (error) {
            console.log(error);
            res.status(404).json({
                EC: -1,
                data: null,
            });
        }
    }
}