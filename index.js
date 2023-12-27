require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/routes')
const mongoString = process.env.DATABASE_URL
const app = express()

mongoose.connect(mongoString, { useNewUrlParser: true, useUnifiedTopology: true })
const database = mongoose.connection

database.on('error',(error) => {
    console.log('error anjing');
})

database.once('connected', () => {
    console.log('Database connected');
})

app.use(express.json())

app.use('/api',routes)

app.listen(3000, () => {
    console.log(`Server started at ${3000}`);
})


