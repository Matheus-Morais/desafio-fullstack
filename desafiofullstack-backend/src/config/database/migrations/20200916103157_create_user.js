
exports.up = function (knex) {
    return knex.schema.createTable('usuarios', function (table) {
        table.increments()
        table.string('nome').notNullable()
        table.string('sobrenome').notNullable()
        //O numero de celular no brasil tem por padrão 13 digitos
        table.string('numero', 13).notNullable().unique()
        table.string('email').notNullable().unique()
        table.string('senha').notNullable()
    })
};

exports.down = function (knex) {
    knex.schema.dropTable('usuarios')
};
