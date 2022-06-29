const userService = ({userRepository}) =>({
    pruebaUserService(){
        return userRepository.pruebaUser()
    },
    async createUserService(usr){
        return userRepository.createUser(usr)
    },
    async findUserbyEmailService(email){
        return userRepository.findUserbyEmail(email)
    },
    async findUserbyIDService(id){
        return userRepository.findUserById(id)
    }
})

module.exports = userService;