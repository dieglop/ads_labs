const { Sequelize, DataTypes } = require('sequelize');
const db = require("../database/database.js");



const Cliente = db.define('Cliente', {
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    cpf: {
        type: DataTypes.STRING(14),
        unique: true,
        allowNull: false,
        validate: {
            is: /^\d{3}[.]\d{3}[.]\d{3}[-]\d{2}$/i,
        }
    }
});

module.exports = Cliente;

