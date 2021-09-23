const bodyParser = require('body-parser')
const express = require('express')

const app = express()
const morgan = require('morgan')

const productRoutes = require('./api/routes/products')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Manage a route | localhost:3000/products
app.use('/products', productRoutes)


app.use((req, res, next) => {
    res.status(200)
    res.json({
        message: "Hey, This works"
    })
})

module.exports = app