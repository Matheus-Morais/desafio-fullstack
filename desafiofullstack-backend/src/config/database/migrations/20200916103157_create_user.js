
exports.up = function (knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments()
        table.string('name').notNullable()
        table.string('last_name').notNullable()
        //O numero de celular no brasil tem por padrão 13 digitos
        table.string('phone', 13).notNullable().unique()
        table.string('email').notNullable().unique()
        table.string('password').notNullable()
    })
};

exports.down = function (knex) {
    knex.schema.dropTable('users')
};
