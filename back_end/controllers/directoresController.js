const asyncHandler = require('express-async-handler')

const director = require('../modules/directorModel')

const setDirector = asyncHandler(async(req, res) => {
    const {name, date} = req.body

    if(!req.body.name || !req.body.date){
        res.status(400)
        throw new Error ('Por favor ingrese todos los datos solicitados')
    }

    const newDirector = await director.create({
        name,
        date
    })

    res.status(201).json({
        newDirector,
        message: 'Director creado'
    })
})

const getDirectores = asyncHandler(async(req, res) => {
    const directores = await director.find()

    res.status(200).json(directores)
})

const updateDirector = asyncHandler(async(req, res) => {
    const Director = await director.findById(req.params.id)

    if(!Director){
        res.status(400)
        throw new Error('Director not found')
    }

    const updateDirector = await director.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updateDirector)
}) 

const deleteDirector = asyncHandler(async(req, res) => {
    const deleteDirector = await director.findById(req.params.id)

    if(!deleteDirector){
        res.status(400)
        throw new Error('Director not found')
    }

    await deleteDirector.remove()

    res.status(200).json({
        deleteDirector,
        message: 'Director eliminado'
    })
})

module.exports = {
    setDirector,
    getDirectores,
    updateDirector,
    deleteDirector
}