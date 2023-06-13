// load env variables
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

// import dependencies
const express = require('express')
const cors = require('cors')
const connectToDb = require('./config/connectToDb')
const routes = require('./routes/train')
const errorHandler = require('./middleware/errorHandler')

// create an express app
const app = express()

app.use(express.json())
app.use(cors())

connectToDb()

// routing
app.use('/api/v1/train', routes)
app.use(errorHandler)

// start our server
app.listen((process.env.PORT), () => console.log('Server is running at port ' + process.env.PORT))
