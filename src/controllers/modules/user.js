const userController = ({userService}) =>({
    /* async */ getUser(req,res,next){
       /*  let resp = await userService.pruebaUserService() */
        res.json({
            message: "Anduvo bien el middleware"
        })
    },
    signInController(req,res){
        console.log(req.user)
        res.status(200).json({
            message:"Usuario logueado"
        })
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
    },
    sessionLogout(req,res){
        console.log(req) 
        res.json({ 
                status: "logout",
                msg:"Please Log In again"
             });
    },
})



module.exports = userController;