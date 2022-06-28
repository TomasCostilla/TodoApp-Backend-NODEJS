const baseRepository = require('../baseRepository')
const userModel = require('../../db/models/user')

const userRepository = () =>({
    pruebaUser(){
        return baseRepository.prueba()
    },
    async createUser(usr){
        return baseRepository.createObj(userModel,usr)
    }
})

module.exports = userRepository;