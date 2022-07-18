const request = require('request')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

//static folder
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 5500


app.listen(PORT, console.log(`server started on ${PORT}`))
