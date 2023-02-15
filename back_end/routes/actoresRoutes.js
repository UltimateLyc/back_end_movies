const express = require('express')
const router = express.Router()

const { setActor, getActors } = require('../controllers/actoresController')


router.route('/').get(getActors).post(setActor)
/* router.post('/', setActor)
router.get('/', getActors) */

module.exports = router
