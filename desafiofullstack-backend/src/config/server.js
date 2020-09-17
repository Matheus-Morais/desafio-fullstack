const port = process.env.PORT

const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const server = express()

server.use(cors())
server.use(bodyParser.json())

server.get('/', (req, res) => {
    res.type('text/plain')
    res.send(`Desafio FullStack Backend`)
})


server.listen(port, function () {
    console.log(`Backend is running on port ${port}`)
})

module.exports = server
