module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/movie_director_db'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};