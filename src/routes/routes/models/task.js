const {taskController} = require('../../../controllers')

module.exports = (router) =>{
    router
        .get('/task',taskController.getTask)

    return router;
}