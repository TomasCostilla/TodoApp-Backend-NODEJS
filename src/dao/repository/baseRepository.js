const prueba = () =>{
    return 'prueba desde repository'
}

const createObj = async (model,obj) =>{
    await model.create(obj)
}

const getAll = async (model) =>{
    return model.find({})
}

const getById = async (model,id) =>{
    return model.findById(id)
}

module.exports = {
    prueba,
    createObj,
    getAll,
    getById
}