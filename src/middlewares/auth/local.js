const LocalStrategy = require('passport-local').Strategy;
const {isValidPassword} = require('../../utils/bcrypt')
const {userService} = require('../../services')
const userModel = require('../../dao/db/models/user')


module.exports = (passport) => {
    passport.use('login',new LocalStrategy({
        usernameField: 'userEmail',
        passwordField:'userPassword'
    },async (email,password,done)=>{
        const user = await userService.findUserbyEmailService(email)
        if(!user) return done(null,false)
        /* if(!isValidPassword(user,password))
            return done(null,false,{message:'Contraseña invalida'}) */
            
        return done(null,user)  
    }))

    passport.serializeUser((user, done) => {
        done(null, user._id);
    });

    passport.deserializeUser(async(id, done) => {
        userModel.findById(id, (err, user) => {
          done(err, user);
        });
      });

}