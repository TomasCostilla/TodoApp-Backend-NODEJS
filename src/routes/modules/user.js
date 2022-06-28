/* const {pruebaMiddleware} = require('../../middlewares/auth/local')
 */
const passport = require('passport')
const {loginUsr} = require('../../middlewares/auth/local')
/* require('../../middlewares/auth/local')(passport)
 */
module.exports = (router,{userController}) =>{
    router
        .get('/user',/* pruebaMiddleware, */userController.getUser)
        .post('/signup',userController.signUpController)
        .post('/sigin',loginUsr().aut('login'),userController.signInController)
        /* .post('/signup',userController.signUpController()) */


    return router;
}