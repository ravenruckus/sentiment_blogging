
exports.seed = function(knex) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
        id: 1,
        name: 'John Doe',
        facebook_id: '108535243015333',
        facebook_token: 'EAACre1qJ578BAJs6koLJPXZCwzzUEAACre1qJ578BAJs6koLJPXZCwzzU'
      }
    ])
    })
    .then(function() {
      return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))")
    })
}
