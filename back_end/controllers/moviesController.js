const asyncHandler = require('express-async-handler')

const movie = require('../modules/movieModel')

const setMovie = asyncHandler(async(req, res) => {
    const {name, genre, running_time, directed_by, release, actor} = req.body

    if(!name || !genre || !running_time || !directed_by || !release || !actor){
        res.status(400)
        throw new Error('Favor de ingresar los datos correctamente')
    }

    const newMovie = await movie.create({
        name,
        genre,
        running_time,
        release,
        directed_by,
        actor
    })

    res.status(201).json(newMovie)
})

const getMovies = asyncHandler(async(req, res) => {
    const movies = await movie.find()

    res.status(200).json(movies)
})

module.exports = {
    setMovie,
    getMovies
}