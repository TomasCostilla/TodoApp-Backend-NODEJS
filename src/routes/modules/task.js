
module.exports = (router,{taskController}) =>{
    router
        .get('/task',taskController.getTask)

    return router;
}