const {Schema,model} = require('mongoose')

const taskSchema = new Schema({
    taskName:String,
    taskDescription:String
})

module.exports = model('task',taskSchema)