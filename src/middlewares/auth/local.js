const LocalStrategy = require('passport-local').Strategy;
const {isValidPassword} = require('../../utils/bcrypt')
const {userService} = require('../../services')
const userModel = require('../../dao/db/models/user')

const loginUsr = (passport) =>{
    passport.use('login',new LocalStrategy({
        usernameField: 'userEmail',
        passwordField:'userPassword'
    },async (email,password,done)=>{
        console.log(email)
        console.log(password)
        const user = await userModel.findOne({userEmail: email})
    }))
}

module.exports = {
    loginUsr
}


/* module.exports = (passport) => {
    passport.use('login',new LocalStrategy({
        usernameField: 'userEmail',
        passwordField:'userPassword'
    },async (email,password,done)=>{
        console.log(email)
        console.log(password)
        const user = await userModel.findOne({userEmail: email})
    }))

} */