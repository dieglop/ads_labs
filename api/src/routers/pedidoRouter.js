const express = require('express');
const pedidoMiddleware = require('../middlewares/pedidoMiddleware');
const pedidoController = require('../controllers/pedidoController');

const pedidoRouter = express.Router();

pedidoRouter.post('/', 
    pedidoMiddleware.clienteObrigatorio,
    pedidoMiddleware.pratoObrigatorio,
    pedidoController.cadastrarPedido
);
pedidoRouter.get('/', pedidoController.listarTodosOsPedidos);
pedidoRouter.get('/quantidade', pedidoController.listarPorQuantidadeDePedidos);
pedidoRouter.get('/clientes-mais-pedidos', pedidoController.listarOsClientesComMaisPedidos)
pedidoRouter.get('/clientes-mais-gastaram', pedidoController.listarOsClientesPorGasto);
pedidoRouter.get('/:id', pedidoController.buscarPedido);
pedidoRouter.put('/:id', pedidoController.atualizarPedido);
pedidoRouter.delete('/:id', pedidoController.removerPedido);


module.exports =  pedidoRouter
