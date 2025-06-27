const express = require('express');
const pratoMiddleware = require('../middlewares/pratoMiddleware');
const pratoController = require('../controllers/pratoController');

const pratoRouter = express.Router();

pratoRouter.get('/', pratoController.listarTodosOsPratos);
pratoRouter.get('/:id', pratoController.buscarPrato);
pratoRouter.post('/cadastrar', 
    pratoMiddleware.nomeDoPratoObrigatorio,
    pratoMiddleware.validarNomeDoPrato,
    pratoMiddleware.precoDoPratoObrigatorio,
    pratoMiddleware.validarFormatoPreco,
    pratoController.cadastrarPrato
);
pratoRouter.put('/:id', pratoController.atualizarPrato);
pratoRouter.delete('/:id', pratoController.removerPrato);

module.exports = pratoRouter;