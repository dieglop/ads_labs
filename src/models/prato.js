const { Sequelize, DataTypes } = require('sequelize');
const db = require("../database/database.js");



const Prato = db.define('Prato', {

    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    preco: {
        type: DataTypes.DECIMAL(5,2),
        allowNull: false
    }

});

module.exports = Prato;