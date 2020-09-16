const express = require('express')

module.exports = function (server) {
    const serverV1 = express.Router()
    server.use('/v1', serverV1)

    serverV1.get('/', (req, res) => {
        res.type('text/plain')
        res.send(`Desafio FullStack Backend - v1`)
    })
}