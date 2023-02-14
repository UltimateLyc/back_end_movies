/* Llamado de dependencias */
const mongoose = require('mongoose')

/* Schema */
const movieSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Favor de ingresar el nombre de la pelicula']
    },
    genre: {
        type: String,
        required: [true, 'Favor de ingresar el genero']
    }, 
    running_time: {
        type: Number,
        required: true
    },
    directed_by: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Actor'
    },
    release: {
        type: Date,
        required: true
    },
    actor: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true, 
        ref: 'Actor'
    }]
}, {
    timestamps: true
})

module.exports = mongoose.model('Movie', movieSchema)
