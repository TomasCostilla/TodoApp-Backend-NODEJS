const bcrypt = require('bcrypt')

const isValidPassword = (user,password) =>{
    return bcrypt.compareSync(password,user.password)
}



module.exports = {
    isValidPassword
}