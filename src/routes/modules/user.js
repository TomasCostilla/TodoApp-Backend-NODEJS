const passport = require('passport')
require('../../middlewares/auth/local')(passport)

module.exports = (router,{userController}) =>{
    router
        .get('/user',userController.getUser)
        .post('/user/signup',userController.signUpController)
        .post('/user/sigin',passport.authenticate('login'),userController.signInController)
        .get('/user/logout',userController.sessionLogout)
        


    return router;
}