const Train = require('../modules/train')
const { tryCatch } = require('../utils/tryCatch')

const fetchTrains = tryCatch(async (req, res) => {
  const trains = await Train.find()
  res.json({ trains })
})

const fetchTrain = tryCatch(async (req, res) => {
  const trainId = req.params.id

  const train = await Train.findById(trainId)
  res.status(200).json({ train })
})

const createTrain = tryCatch(async (req, res) => {
  const {
    trainName,
    departureStation,
    departureTime,
    arrivalStation,
    arrivalTime,
    duration,
    stops
  } = req.body

  const train = await Train.create({
    trainName,
    departureStation,
    departureTime,
    arrivalStation,
    arrivalTime,
    duration,
    stops
  })

  res.status(200).json({ train })
})

const updateTrain = tryCatch(async (req, res, next) => {
  const trainId = req.params.id

  const {
    trainName,
    departureStation,
    departureTime,
    arrivalStation,
    arrivalTime,
    duration,
    stops
  } = req.body

  await Train.findByIdAndUpdate(trainId, {
    trainName,
    departureStation,
    departureTime,
    arrivalStation,
    arrivalTime,
    duration,
    stops
  })

  const train = await Train.findById(trainId)

  res.status(200).json({ train })
})

const removeTrain = tryCatch(async (req, res, next) => {
  const trainId = req.params.id

  await Train.deleteOne({ _id: trainId })
  res.status(200).json({ success: 'Record deleted' })
})

module.exports = {
  fetchTrain,
  fetchTrains,
  createTrain,
  updateTrain,
  removeTrain
}
