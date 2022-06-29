const express = require('express')
const cors = require('cors')
const compression = require('compression')
const router = express.Router()
const passport = require('passport')
const session = require('express-session')


module.exports = (modules)=>{
    
    /* Config */
    router
        .use(express.json())
        .use(cors())
        .use(compression())
        .use(session({
            secret:'secret',
            saveUninitialized:true,
            resave:true
        }))



    /* Routes api inyection*/
    router.use('/api',modules(router).userRoutes)
    router.use('/api',modules(router).taskRouter)
    



    router.get('/',(req,res)=>{
        res.status(200).json({
            mensaje: 'Bienvenido al BackEnd de TodoAPP hecho con NodeJs'
        })
    })



    return router;
}