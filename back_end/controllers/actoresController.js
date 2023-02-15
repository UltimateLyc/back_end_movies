/* llamado de dependencias */
const asyncHandler = require('express-async-handler')

// importacion de modelos
const actor = require('../modules/actorModel')

/* Funciones para endpoitns */
// Function post
const setActor = asyncHandler(async(req, res) => {

    const {name, date} = req.body

    if(!req.body.name || !req.body.date){
        res.status(400)
        throw new Error ('Por favor ingrese todos los datos solicitados')
    }

    const newActor = await actor.create({
        name,
        date
    })

    res.status(201).json({
        newActor,
        message: 'Actor creado'
    })
}) 

// Function get
const getActors = asyncHandler(async(req, res) => {
    const actores = await actor.find()

    res.status(200).json(actores)
})

//Function put (update)
const updateActor = asyncHandler(async(req, res) => {

    const Actor = await actor.findById(req.params.id)

    if(!Actor){
        res.status(400)
        throw new Error('Actor not found')
    }

    const updateActor = await actor.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updateActor)
})

const deleteActor = asyncHandler(async(req, res) => {
    const Actor = await actor.findById(req.params.id)

    if(!Actor){
        res.status(400)
        throw new Error('Actor not found')
    }

    await Actor.remove()

    res.status(200).json({
        Actor,
        message: 'Actor eliminado'
    })
})

module.exports = {
    setActor,
    getActors,
    updateActor,
    deleteActor
}