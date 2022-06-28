const userController = ({userService}) =>({
    /* async */ getUser(req,res,next){
       /*  let resp = await userService.pruebaUserService() */
        res.json({
            message: "Anduvo bien el middleware"
        })
    },
    signInController(req,res){
        res.json({msg:"usuario logueado"})
    },
    async signUpController(req,res,next){
         try {
                await userService.createUserService(req.body)
                res.status(200).json({
                    msg: "Usuario creado"
                })
         } catch (error) {
            res.status(400).json({msg:"Ocurrio un error inesperado"})
         }
    }
})



module.exports = userController;