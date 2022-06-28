const baseRepository = require('../baseRepository')
const taskModel = require('../../db/models/task')


const taskRepository = () =>({
    pruebaTask(){
        return baseRepository.prueba()
    },
    async createTask(task){
        try {
            await baseRepository.createObj(taskModel,task)
        } catch (error) {
            return error
        }
    },
    async getAllTask(){
        return baseRepository.getAll(taskModel)
    }  
})



module.exports = taskRepository;