const mongoose = require('mongoose')

const actorSchema = mongoose.Schema({
    neme: {
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