require('dotenv').config()

//Configuração inicial do servidor
const server = require('./config/server')

//Adicionando as rotas
require('./config/routes')(server)
