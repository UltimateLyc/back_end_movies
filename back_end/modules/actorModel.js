const mongoose = require('mongoose')

const actorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Actor', actorSchema)