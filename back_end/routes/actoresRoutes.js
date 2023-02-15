const express = require('express')
const router = express.Router()

const { setActor, getActors, updateActor, deleteActor } = require('../controllers/actoresController')


router.route('/').get(getActors).post(setActor)
router.route('/:id').put(updateActor).delete(deleteActor)
/* router.post('/', setActor)
router.get('/', getActors) */

module.exports = router
