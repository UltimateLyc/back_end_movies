const express = require('express')
const router = express.Router()

const { getDirectores, setDirector, updateDirector, deleteDirector } = require('../controllers/directoresController')

router.route('/').get(getDirectores).post(setDirector)
router.route('/:id').put(updateDirector).delete(deleteDirector)

module.exports = router