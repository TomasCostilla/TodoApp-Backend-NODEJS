const repositories = require('../dao/repository')
const taskService = require('./modules/task')
const userService = require('./modules/user')

module.exports = {
    taskService: taskService(repositories),
    userService: userService(repositories)
}