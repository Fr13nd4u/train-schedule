const express = require('express')
const trainController = require('../controllers/trainController')
const router = express.Router()

router.get('/', trainController.fetchTrains)
router.get('/:id', trainController.fetchTrain)
router.post('/', trainController.createTrain)
router.put('/:id', trainController.updateTrain)
router.delete('/:id', trainController.removeTrain)

module.exports = router
