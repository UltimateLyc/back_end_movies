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
    timestamp: true
})

module.exports = mongoose.model('Actor', directorSchema)