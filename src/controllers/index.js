const userController = require('./modules/user')
const taskController = require('./modules/task')

module.exports = {
    userController: userController(),
    taskController: taskController(),
}