const express = require('express')
const router = express.Router()

// localhost:3000/products/
router.get('/', (req, res, next) => {
    res.status(200)
    res.json({
        message: "Handling GET requests to /products"
    })
})

router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(200)
    res.json({
        message: 'Handling POST requests to /products',
        createdProduct: product
    })
})

// localhost:3000/products/id
// localhost:3000/products/special
router.get('/:productId', (req, res, next) => {
    const id = req.params.productId
    if(id === 'special') {
        res.json({
            message: 'Discovered the SPECIAL id',
            id: id
        })
    } else {
        res.json({
            message: 'Discovered an ID',
            id: id
        })
    }
})

router.patch('/:productID', (req, res, next) => {
    const id = req.params.productID
    res.status(200)
    res.json({
        message: 'Updated Product by PATCH',
        id: id
    })
})

router.delete('/', (req, res, next) => {
    res.status(200)
    res.json({
        message: 'Handling Delete to /products'
    })
})

module.exports = router