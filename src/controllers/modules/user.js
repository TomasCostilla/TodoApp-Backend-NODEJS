const userController = () =>({
    getUser(req,res,next){
        res.json({
            message: "it's works!"
        })
    },
})



module.exports = userController;