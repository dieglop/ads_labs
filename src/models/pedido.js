const { Sequelize, DataTypes } = require('sequelize');
const db = require("../database/database.js");
const Cliente = require("./cliente.js");
const ItemPedido = require("./ItemPedido.js");
const Prato = require("./prato.js");


const Pedido = db.define('Pedido', {
    data: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
  
    total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.00
    }

});

Pedido.belongsTo(Cliente);
Cliente.hasMany(Pedido);

Pedido.belongsToMany(Prato, {through: ItemPedido });
Prato.belongsToMany(Pedido, {through: ItemPedido});

module.exports = Pedido;