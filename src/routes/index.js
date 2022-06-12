const express = require('express')
const cors = require('cors')
const compression = require('compression')
const router = express.Router()


module.exports = (models)=>{
    
    /* Config */
    router
        .use(express.json())
        .use(cors())
        .use(compression())

    /* Routes */
    router.use('/api',models(router).userRoutes)
    router.use('/api',models(router).taskRoutes)
    



    router.get('/',(req,res)=>{
        res.status(200).json({
            mensaje: 'Bienvenido al BackEnd de TodoAPP hecho con NodeJs'
        })
    })



    return router;
}