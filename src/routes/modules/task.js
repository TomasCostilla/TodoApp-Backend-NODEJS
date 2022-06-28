
module.exports = (router,{taskController}) =>{
    router
        .get('/task',taskController.getAllTaskController)
        .post('/task',taskController.createTaskController)

    return router;
}