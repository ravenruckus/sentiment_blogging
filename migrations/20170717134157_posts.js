exports.up = function(knex) {
  return knex.schema.createTable('posts', (table) => {
    table.increments()
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .index()
    table.string('title').notNullable().default('')
    table.text('text').notNullable().default('')
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('posts')
}
