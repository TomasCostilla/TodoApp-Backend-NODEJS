const taskRepository = require('./models/task.repository')
const userRepository = require('./models/user.repository')

module.exports = {
    taskRepository: taskRepository(),
    userRepository: userRepository()
}