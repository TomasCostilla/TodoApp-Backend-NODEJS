const {userController} = require('../../../controllers')

module.exports = (router) =>{
    router
        .get('/user',userController.getUser)


    return router;
}