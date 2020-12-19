const Knex = require('knex') 

exports.up = function (knex) {
   return knex.schema.createTable('usuarios', (table) => {
         table.increments('id').primary();
         table.string('nome').notNullable();
         table.string('email').notNullable();
         table.string('senha').notNullable();
     })
}
exports.down = function (knex) {
    return knex.schema.dropTable('usuarios');
};
