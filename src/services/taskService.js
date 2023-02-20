const Task = require("../models/Task")

module.exports = {
    createATaskService: async (data) => {
        const task = await Task.create(data)
        return task
    },
    updateATaskService: (data) => {
        const task = Task.updateOne({ _id: data.id }, { name: data.name })
        return task
    },
    deleteTaskService: async (id) => {
        const task = await Task.delete({_id: id.trim()})
        return task
    }
}