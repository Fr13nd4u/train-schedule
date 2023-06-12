const mongoose = require('mongoose')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log('Connected to database')
  } catch (e) {
    console.log(e)
  }
}

module.exports = connectToDb
