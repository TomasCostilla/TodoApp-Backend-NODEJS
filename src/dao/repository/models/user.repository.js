const baseRepository = require('../baseRepository')
const userModel = require('../../db/models/user')

const userRepository = () =>({
    pruebaUser(){
        return baseRepository.prueba()
    },
    async createUser(usr){
        return baseRepository.createObj(userModel,usr)
    },
    async findUserbyEmail(email){
        return userModel.findOne({userEmail:email})
    },
    async findUserById(id){
        return baseRepository.getById(userModel,id)
    }
})

module.exports = userRepository;