const bcrypt = require('bcrypt')

const connection = require('../../config/database/connection')
const returnMessages = require('../../config/return.messages')

module.exports = postUser = async (req, res) => {
    //Desestrutura os dados vindos da requisção
    let { name, last_name, phone, email, password, confirm_password } = req.body

    //variavel que vai verificar os erros
    let errors = []

    if (!name) {
        errors.push('Nome não informado.')
    }

    if (!last_name) {
        errors.push('Sobrenome não informado.')
    }

    if (!phone) {
        errors.push('Telefone não informado.')
    } else {
        //Agora é verificado se o telefone do usuário tem 13 digitos
        if (phone.length != 13) {
            errors.push('Número de telefone inválido.')
        } else {
            let existsUser
            //Realiza um busca no banco de dados, para não cadastrar um outr usuário
            //com telefones iguais
            try {
                existsUser = await connection('users')
                    .where('phone', phone)
            } catch (e) {
                //Se der algum error na conexão com o banco de dados
                returnMessages.errorDatabase(res)
                return
            }

            if (existsUser.length > 0) {
                errors.push('Esse número de telefone já está em uso.')
            }
        }
    }

    if (!email) {
        errors.push('Email não informado.')
    } else {
        let existsUser
        //Realiza um busca no banco de dados, para não cadastrar um outr usuário
        //com emails iguais
        try {
            existsUser = await connection('users')
                .where('email', email)
        } catch (e) {
            //Se der algum error na conexão com o banco de dados
            returnMessages.errorDatabase(res)
            return
        }

        if (existsUser.length > 0) {
            errors.push('Esse email já está em uso.')
        }
    }

    //Verificação de senha
    if (!password || !confirm_password) {
        errors.push('Senhas não informada.')
    }
    //A senha deve ser maior que 8 caracteres
    else if (req.body.password.length < 8) {
        errors.push('A senha deve ter 8 caracteres ou mais.')
    }
    //As senhas devem ser iguais
    else if (password != confirm_password) {
        errors.push('As senhas não são iguais.')
    }

    //Se tiver algum error no array de errors, retorna para o usuário
    if (errors.length > 0) {
        returnMessages.errorGeneral(res, errors)
        return
    }

    //Encripta a senha para aumentar a segurança do usuário
    password = bcrypt.hashSync(password, bcrypt.genSaltSync())

    try {
        //Se tiver tudo ok, apenas insere no banco de dados
        await connection('users').insert({
            name,
            last_name,
            phone,
            email,
            password
        })
    } catch (e) {
        //Se der algum error na conexão com o banco de dados
        returnMessages.errorDatabase(res)
        return
    }

    returnMessages.success(res, "Usuário cadastrado!")
    return
}
