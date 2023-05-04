const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()

const app = express()
const routes = require ('./routes')

mongoose.connect(process.env.MONGO_URI,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}, console.log('Connected to database'))

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 3333);