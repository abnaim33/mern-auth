const express = require('express');
const mongoose = require('mongoose');
const config = require('config')
require('dotenv').config()
const app = express()

// Passing middleware
app.use(express.json())

const db = process.env.MONGO_URL

mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Database is connected...'))
    .catch(err => console.log('Database connection error : ' + err))

// Routes
app.use('/api/users', require('./routes/api/user'))
app.use('/api/auth', require('./routes/api/auth'))

const Port = process.env.PORT || 5000;
app.listen(Port, () => {
    console.log(`Server is running at Port ` + Port)
})