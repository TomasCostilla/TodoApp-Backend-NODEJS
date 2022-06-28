const userService = ({userRepository}) =>({
    pruebaUserService(){
        return userRepository.pruebaUser()
    },
    async createUserService(usr){
        return userRepository.createUser(usr)
    }
})

module.exports = userService;