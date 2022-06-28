const userController = require('./modules/user')
const taskController = require('./modules/task')
const services = require('../services')


module.exports = {
    userController: userController(services),
    taskController: taskController(services),
}