const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')

const app = express()
const morgan = require('morgan')

const productRoutes = require('./api/routes/products')
const homeRoute = require('./api/routes/products')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

mongoose.connect('mongodb+srv://gudiyasharma:examplepwd@cluster0.gr09l.mongodb.net/products?retryWrites=true&w=majority')
    .then(() => {
        console.log('Connection to the DB is successfull!')
    }).catch((err) => {
        console.log('DB ERROR' + err)
        process.exit(-1)
    })

// Manage a route | localhost:3000/products
app.use('/', homeRoute)
app.use('/products', productRoutes)


app.use((req, res, next) => {
    res.status(200)
    res.json({
        message: "Hey, This works"
    })
})

module.exports = app
