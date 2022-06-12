const mongoose = require('mongoose')
const {MONGO_URI} = require('../../config/globals')

const getConnection = async()=>{
    try {
        await mongoose.connect(MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        return "BD connected succesful"
    } catch (error) {
        return "Error in BD"
    }
}

module.exports ={
    getConnection
}