const taskController = ({taskService}) =>({
    async getTask(req,res,next){
        let resp = await taskService.pruebaTaskService() 
        res.json({
            message: resp
        })
    },
    async createTaskController(req,res,next){
        let status,message = null
        try {
            await taskService.createNewTask(req.body)
            message = "Objeto creado"
            status = 200
        } catch (error) {
            message = error
            status = 400
        }
        
        res.status(status).json({msg: message})

    },
    async getAllTaskController(req,res,next){
        try {
            let collection = await taskService.getAllTaskService()
            console.log(collection)
            res.status(200).json({
                message: "Lista de tareas",
                collection
            })
        } catch (error) {
            res.status(400).json({message: "Ocurrio un error inesperado"})   
        }
    },
})

module.exports = taskController;