
const envs = require ('dotenv').config


const Pool = require('pg').Pool;

const pool = new Pool({
  user: process.env.POSTGRES_USERNAME,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSOWRD,
  port: process.env.POSTGRES_PORT,

});

const getGames = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM games ORDER BY id ASC', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }

  module.exports = {
    getGames
  }