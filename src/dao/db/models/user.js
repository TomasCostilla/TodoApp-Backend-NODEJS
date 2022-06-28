const {Schema,model} = require('mongoose')

const userSchema = new Schema({
    userName:String,
    userEmail:String,
    userPassword:String
})


module.exports = model('user',userSchema)