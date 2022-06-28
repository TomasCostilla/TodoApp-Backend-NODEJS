const express = require('express')
const cors = require('cors')
const compression = require('compression')
const router = express.Router()


module.exports = (modules)=>{
    
    /* Config */
    router
        .use(express.json())
        .use(cors())
        .use(compression())

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