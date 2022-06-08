const path = require('path')
require('dotenv').config({path: path.resolve(__dirname,'../../.env')})

module.exports = {
    NODE_ENV: process.env.NODE_ENV,
    PORT:process.env.PORT,
    MONGO_URI:process.env.MONGO_URI
}