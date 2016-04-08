module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './db.sqlite3'
    },
    migrations: {
      directory: __dirname + '/migrations',
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: '',
    connection: {
      host: '',
      port: '',
      database: '',
      user: '',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/migrations',
      tableName: 'knex_migrations'
    }
  }

};
