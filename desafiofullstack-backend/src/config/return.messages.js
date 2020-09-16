//para evitar repetição, é necessario um documento com as mensagens a serem 
//retornadas para o usuario

module.exports = {
    success: (res, message) => {
        res.status(200).send({
            message: {
                title: 'Sucesso na operação',
                message: message
            },
        })
    },

    errorGeneral: (res, errors = null) => {
        res.status(422).send({
            message: {
                title: 'Erro geral',
                message: 'Não foi possivel realizar a operação.'
            },
            errors: errors
        })
    },

    errorDatabase: (res) => {
        res.status(422).send({
            message: {
                title: 'Erro no banco de dados',
                message: 'Não foi possivel realizar a operação no banco de dados.'
            }
        })
    },
}
