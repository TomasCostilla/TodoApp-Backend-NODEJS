const userRoutes = require('./models/user')
const taskRoutes = require('./models/task')


module.exports = (router)=>({
    userRoutes: userRoutes(router),
    taskRoutes: taskRoutes(router)
})