const mongoose = require('mongoose')

const trainSchema = new mongoose.Schema({
  trainName: {
    type: String,
    required: true
  },
  departureStation: {
    type: String,
    required: true
  },
  departureTime: {
    type: Date,
    required: true
  },
  arrivalStation: {
    type: String,
    required: true
  },
  arrivalTime: {
    type: Date,
    required: true
  },
  distance: {
    type: Number,
    required: true
  },
  stops: [{
    station: {
      type: String,
      required: true
    },
    arrivalTime: {
      type: Date,
      required: true
    },
    departureTime: {
      type: Date,
      required: true
    }
  }]
})

const Train = mongoose.model('Train', trainSchema)

module.exports = Train
