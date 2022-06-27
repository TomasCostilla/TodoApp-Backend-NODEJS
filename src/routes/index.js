const taskRouter = require('./modules/task')
const controllers = require('./../controllers')

module.exports = (router)=>({
    taskRouter: taskRouter(router,controllers)
});