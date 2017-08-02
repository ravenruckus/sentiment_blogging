
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL || 'sample-db',
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'sample-db2',
  },
}
