/* llamado de dependencias */
const asyncHandler = require('express-async-handler')

// importacion de modelos
const actor = require('../modules/actorModel')

/* Funciones para endpoitns */
// Funcion post
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

const getActors = asyncHandler(async(req, res) => {
    const actores = await actor.find()

    res.status(200).json(actores)
})

module.exports = {
    setActor,
    getActors
}