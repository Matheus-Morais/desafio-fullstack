const knex = require('knex')
const configuration = require('../../../knexfile')

const connection = knex(configuration[process.env.STAGE]);

module.exports = connection;
