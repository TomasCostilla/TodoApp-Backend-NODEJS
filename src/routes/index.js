const taskRouter = require('./modules/task')
const userRoutes = require('./modules/user')
const controllers = require('./../controllers')

module.exports = (router)=>({
    taskRouter: taskRouter(router,controllers),
    userRoutes: userRoutes(router,controllers)
});