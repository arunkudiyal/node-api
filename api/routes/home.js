const express = require('express')
const router = express.router

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: "Hanling GET requests to /"
  })
})

module.exports - router
