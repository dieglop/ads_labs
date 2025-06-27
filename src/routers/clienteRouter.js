const express = require('express');
const clienteMiddleware = require('../middlewares/clienteMiddleware');
const clienteController = require('../controllers/clienteController');

const clienteRouter = express.Router();

clienteRouter.get('/', clienteController.listarTodosOsClientes);
clienteRouter.get('/:id', clienteController.buscarCliente);
clienteRouter.post('/cadastrar', 
    clienteMiddleware.nomeObrigatorio,
    clienteMiddleware.cpfObrigatorio,
    clienteMiddleware.validarCPF,
    clienteController.cadastrarCliente
);
clienteRouter.put('/:id', clienteController.atualizarCliente);
clienteRouter.delete('/:id', clienteController.removerCliente);

module.exports = clienteRouter;


