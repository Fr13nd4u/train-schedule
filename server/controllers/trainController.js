const Train = require('../modules/train')
const { tryCatch } = require('../utils/tryCatch')

const fetchTrains = tryCatch(async (req, res) => {
  const { search, sortBy } = req.query

  let query = Train.find()

  // search
  if (search) {
    const searchRegex = new RegExp(search, 'i')
    query = query.or([
      { trainName: searchRegex },
      { departureStation: searchRegex },
      { arrivalStation: searchRegex }
    ])
  }

  // sort
  if (sortBy) {
    const sortOptions = {
      trainName: 'trainName',
      departureTime: 'departureTime',
      arrivalTime: 'arrivalTime',
      distance: 'distance'
    }

    const sortField = sortOptions[sortBy] || 'trainName'
    query = query.sort(sortField)
  }

  const trains = await query.exec()

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
    distance,
    stops
  } = req.body

  const train = await Train.create({
    trainName,
    departureStation,
    departureTime,
    arrivalStation,
    arrivalTime,
    distance,
    stops
  })

  res.status(200).json({ train })
})

const updateTrain = tryCatch(async (req, res) => {
  const trainId = req.params.id

  const {
    trainName,
    departureStation,
    departureTime,
    arrivalStation,
    arrivalTime,
    distance,
    stops
  } = req.body

  await Train.findByIdAndUpdate(trainId, {
    trainName,
    departureStation,
    departureTime,
    arrivalStation,
    arrivalTime,
    distance,
    stops
  })

  const train = await Train.findById(trainId)

  res.status(200).json({ train })
})

const removeTrain = tryCatch(async (req, res, next) => {
  const trainId = req.params.id

  await Train.deleteOne({ _id: trainId })
  res.status(200).json({ _id: trainId })
})

module.exports = {
  fetchTrain,
  fetchTrains,
  createTrain,
  updateTrain,
  removeTrain
}
