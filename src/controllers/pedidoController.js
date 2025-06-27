const pedidoService = require('../services/pedidoService');

function cadastrarPedido(req, res){
    pedidoService.cadastrarPedido(req.body)
    .then((resultado) => {
        return res.status(201).send({
            message: "Pedido realizado!",
            Pedido: resultado
        })
    },(error) => {
        return res.status(500).send({message: error.message});
    });
}

function buscarPedido(req, res){
    pedidoService.buscarPedido(req.params.id)
    .then((pedido) => {
        return res.status(302).send({
            message: "Pedido encontrado!",
            Pedido: pedido
        });
    }, (error) => {
        return res.status(500).send({message: error.message});
    });
}

function listarPorQuantidadeDePedidos(req, res){
    pedidoService.listarPorQuantidadeDePedidos()
    .then((pedidos) => {
        return res.status(200).send({
            message: "Produtos por quantidade de pedidos",
            Pedidos: pedidos
        });
    }, (error) => {
        return res.status(500).send({message: error.message});
    });
}

function listarOsClientesComMaisPedidos(req, res){
    pedidoService.listarOsClientesComMaisPedidos()
    .then((pedidos) => {
        return res.status(200).send({
            message: "Clientes por quantidade de pedidos",
            Pedidos: pedidos
        });
    }, (error) => {
        return res.status(500).send({message: error.message});
    });
}

function listarOsClientesPorGasto(req, res){
    pedidoService.listarOsClientesPorGasto()
    .then((pedidos) => {
        return res.status(200).send({
            message: "Clientes por gasto",
            Pedidos: pedidos
        });
    }, (error) => {
        return res.status(500).send({message: error.message});
    });
}

function listarTodosOsPedidos(req, res){
    pedidoService.listarTodosOsPedidos()
    .then((pedidos) => {
        return res.status(200).send({
            message: "Pedidos",
            Pedidos: pedidos
        });
    }, (error) => {
        return res.status(500).send({message: error.message});
    });
}

function atualizarPedido(req, res){
    pedidoService.atualizarPedido(req.params.id, req.body)
    .then((pedido) => {
        return res.status(302).send({
            message: "Pedido atualizado com sucesso!",
            Pedido: pedido
        });
    }, (error) => {
        return res.status(500).send({message: error.message});
    });
}

function removerPedido(req, res){
    pedidoService.removerPedido(req.params.id)
    .then((pedido) => {
        return res.send({
            message: "Pedido removido com sucesso!",
            Pedido: pedido
        });
    }, (error) => {
        return res.status(500).send({message: error.message});
    });
}

module.exports = {
    cadastrarPedido,
    buscarPedido,
    listarPorQuantidadeDePedidos,
    listarOsClientesComMaisPedidos,
    listarOsClientesPorGasto,
    listarTodosOsPedidos,
    atualizarPedido,
    removerPedido
}