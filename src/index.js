const {PORT} = require('./config/globals')
const { getConnection } = require('./dao/db/connection')
const app = require('./server')


getConnection().then(msg=>{
    console.log(msg)
    app.listen(PORT,()=>{
        console.log(`Servidor corriendo en ${PORT}`)
    })
}).catch(err=>console.log(err))
