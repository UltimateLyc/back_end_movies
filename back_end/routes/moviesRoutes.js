const express = require('express')
const router = express.Router()

const { setMovie, getMovies } = require('../controllers/moviesController')

router.route('/').post(setMovie).get(getMovies)

module.exports = router