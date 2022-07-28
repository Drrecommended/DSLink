const request = require('request')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

// Bodyparser Middleware
app.use(bodyParser.urlencoded({ extended: true }))

//static folder
app.use(express.static(path.join(__dirname, 'public')))

// Signup Route
app.post('/signup', (req, res) => {
    console.log(req.body)
    res.send('hello')
})

const PORT = process.env.PORT || 5500

app.listen(PORT, console.log(`server started on ${PORT}`))
