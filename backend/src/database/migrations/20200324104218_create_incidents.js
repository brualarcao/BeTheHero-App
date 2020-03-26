
exports.up = function(knex) {
  return knex.schema.createTable('incidents', function (table) {
    table.increments() //Cria um ID automaticamente para cada caso(incident)

    table.string('title').notNullable()
    table.string('description').notNullable()
    table.decimal('value').notNullable()

    table.string('ong_id').notNullable() //Recebe o id de cada ong

    table.foreign('ong_id').references('id').inTable('ongs') // Declara a chave estrangeira para relacoes com outra tabela
  })
};

exports.down = function(knex) {
  knex.schema.dropTable('incidents')
};
