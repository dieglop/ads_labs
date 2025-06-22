const { Sequelize } = require('sequelize');


const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.HOST,
    dialect: process.env.DB_DIALECT

});

db.sync();

module.exports = db


