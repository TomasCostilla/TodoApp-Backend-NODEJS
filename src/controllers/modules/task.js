const taskController = () =>({
    getTask(req,res,next){
        res.json({
            message:"task endpoint works!"
        })
    },
})

module.exports = taskController;