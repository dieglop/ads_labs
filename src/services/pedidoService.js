const { Sequelize } = require('sequelize');
const Pedido = require('../models/pedido');
const Prato = require('../models/prato');
const Cliente = require('../models/cliente');
const ItemPedido = require('../models/ItemPedido');



async function cadastrarPedido(dados) {
    try {
        const novoPedido = await Pedido.create({ ClienteId: dados.ClienteId });
        await novoPedido.addPratos(dados.pratos);

        const pedidoCompleto = await Pedido.findByPk(novoPedido.id, {
            include: [
                {model: Cliente, attributes: ['nome']},
                {model: Prato, attributes: ['nome', 'preco']},
            ]
        });

        const total = pedidoCompleto.Pratos.reduce((soma, prato) => soma + Number(prato.preco), 0);
        await novoPedido.update({total});
        
        return {
            pedidoId: pedidoCompleto.id, 
            cliente: pedidoCompleto.Cliente.nome,
            pratos: pedidoCompleto.Pratos.map(p => p.nome),
            total: total
        }
    } catch (error) {
        throw error;
    }
}

async function buscarPedido(idPedido) {
    try {
        const pedidoEncontrado = await Pedido.findByPk(idPedido,{
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },

            include: [
                { model: Cliente, attributes: ['nome'] },
                { model: Prato, attributes: ['nome', 'preco'] }
            ]        
        });
        return pedidoEncontrado;
        
    } catch (error) {
        throw(error)
    }
}

async function listarTodosOsPedidos() {
    try {
        
        return await Pedido.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
    
            include: [
                { model: Cliente, attributes: ['nome'] },
                { model: Prato, attributes: ['nome', 'preco'], through: {attributes:[]} }
            ]}
        );
    } catch (error) {
        
    }
    
}

async function atualizarPedido(idPedido, dados) {
    try {
        const pedidoEncontrado = await Pedido.findByPk(idPedido, {
            include:[
                { model: Cliente, attributes:['nome']},
            ]
        });
    
        if(pedidoEncontrado){
            await pedidoEncontrado.setPratos(dados.pratos);
        }
    
        const pratos = await pedidoEncontrado.getPratos({
            attributes: ['nome', 'preco'],
            joinTableAttributes: []
        });
    
        const total = pratos.reduce((soma, prato) => soma + parseFloat(prato.preco), 0);
        await pedidoEncontrado.update({total});
        
        return {
            ClienteId: pedidoEncontrado.ClienteId,
            nome: pedidoEncontrado.Cliente?.nome || 'Desconhecido',
            total: total,
            pratos: pratos.map(p => ({
                nome: p.nome,
                preco: Number(p.preco)
            }))
        };
        
    } catch (error) {
        throw(error)
    }
}

async function removerPedido(idPedido) {
    try {
        const pedidoEncontrado = await Pedido.findByPk(idPedido);
    
        if(pedidoEncontrado){
            await pedidoEncontrado.destroy();
        }
    
        return pedidoEncontrado;
        
    } catch (error) {
        throw(error)
    }
}

async function listarPorQuantidadeDePedidos() {
    try {
        const contagem = await ItemPedido.findAll({
            attributes: [
                'PratoId',
                [Sequelize.fn('COUNT', Sequelize.col('PratoId')), 'totalPedidos']
            ],
            group: ['PratoId'],
            order: [['totalPedidos', 'DESC']]
        });
    
        const resultado = await Promise.all(contagem.map(async item => {
            const prato = await Prato.findByPk(item.PratoId, {
                attributes: ['nome']
            });
    
            return {
                id: item.PratoId,
                nome: prato ? prato.nome: 'Desconhecido',
                totalPedidos: Number(item.get('totalPedidos'))
            };
        }));
    
        return resultado;
        
    } catch (error) {
        throw(error)
    }
}

async function listarOsClientesComMaisPedidos() {
    try {
        const contagem = await Pedido.findAll({
            attributes:[
                'ClienteId',
                [Sequelize.fn('COUNT', Sequelize.col('ClienteId')), 'totalPedidos']
            ],
            include: [
                {model: Cliente, attributes: ['nome']}    
            ],
            group: ['ClienteId', 'Cliente.id'],
            order: [['totalPedidos', 'DESC']],
            limit: 5
        });
    
        const resultado = contagem.map(pedido => ({
            ClienteId: pedido.ClienteId,
            nome: pedido.Cliente?.nome || 'Desconhecido',
            totalPedidos: Number(pedido.get('totalPedidos'))
        }));
    
        return resultado;
        
    } catch (error) {
        throw (error)
    }
}

async function listarOsClientesPorGasto() {
    try {
        const gasto = await Pedido.findAll({
            attributes: [
                'ClienteId',
                [Sequelize.fn('SUM', Sequelize.col('total')), 'GastoTotal']
            ],
            include: [
                {model: Cliente, attributes: ['nome']}    
            ],
            group: ['ClienteId', 'Cliente.id'],
            order: [['GastoTotal', 'DESC']],
            limit: 5
        });
    
        const resultado = gasto.map(pedidos => ({
            ClienteId: pedidos.ClienteId,
            nome: pedidos.Cliente?.nome || 'Desconhecido',
            GastoTotal: pedidos.get('GastoTotal')
        }))
        
        return resultado;
        
    } catch (error) {
        throw (error)
    }

}


module.exports = {
    cadastrarPedido,
    buscarPedido,
    listarTodosOsPedidos,
    listarPorQuantidadeDePedidos,
    listarOsClientesComMaisPedidos,
    listarOsClientesPorGasto,
    atualizarPedido,
    removerPedido
}