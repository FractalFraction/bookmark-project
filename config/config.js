require('dotenv').config()

module.exports = {
    "development": {
      database:   process.env.DATABASE,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      host: '127.0.0.1',
      dialect: 'postgres'
    }
  }
