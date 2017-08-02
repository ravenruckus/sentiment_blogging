exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments()
    table.string('name').notNullable().default('')
    table.string('facebook_id').notNullable().default('')
    table.string('facebook_token').notNullable().default('')
    table.timestamps(true, true)
  })

}

exports.down = function(knex) {
  return knex.schema.dropTable('users')

}
