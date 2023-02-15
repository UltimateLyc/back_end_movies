const express = require('express')
const router = express.Router()

const { setMovie, getMovies, updateMovie, deleteMovie } = require('../controllers/moviesController')

router.route('/').post(setMovie).get(getMovies)
router.route('/:id').put(updateMovie).delete(deleteMovie)

module.exports = router