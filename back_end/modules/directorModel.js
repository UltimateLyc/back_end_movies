const { timeStamp } = require('console')
const mongoose = require('mongoose')

const directorSchema = mongoose.Schema({
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

module.exports = mongoose.model('Director', directorSchema)