const port = process.env.PORT

const bodyParser = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParser.json())

server.get('/', (req, res) => {
    res.type('text/plain')
    res.send(`Desafio FullStack Backend`)
})


server.listen(port, function () {
    console.log(`Backend is running on port ${port}`)
})

module.exports = server