const { Sequelize } = require('sequelize')
require("dotenv").config();

const db = new Sequelize({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  dialect: 'postgres'
})

module.exports = db

// from external database: tasks_db_qcpe_user:teHE86LdOdK4Gk2zAAwfH2ufLGgpSYkf@dpg-cihneq5gkuvojja62gjg-a.oregon-postgres.render.com/tasks_db_qcpe

//host: dpg-cihneq5gkuvojja62gjg-a.oregon-postgres.render.com

// password: teHE86LdOdK4Gk2zAAwfH2ufLGgpSYkf;