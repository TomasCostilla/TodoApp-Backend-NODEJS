const taskService = ({taskRepository}) =>({
    pruebaTaskService(){
        return taskRepository.pruebaTask()
    },
    async createNewTask(task){
        await taskRepository.createTask(task)
    },
    async getAllTaskService(){
        return taskRepository.getAllTask()
    }
})

module.exports = taskService;