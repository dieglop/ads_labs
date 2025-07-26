const pratoService = require('../services/pratoService');

function cadastrarPrato(req, res){
    pratoService.cadastrarPrato(req.body)
    .then((prato) => {
        return res.status(201).send({
            message: "Prato adicionado com sucesso!",
            Prato: prato
        });
    }, (error) => {
        return res.status(500).send({message: error});
    });
}

function buscarPrato(req, res){
    pratoService.buscarPrato(req.params.id)
    .then((prato) => {
        return res.send({Prato: prato});
    }, (error) => {
        return res.status(404).send({message: error});
    });
}

function listarTodosOsPratos(req, res){
    pratoService.listarTodosOsPratos()
    .then((pratos) => {
        return res.send({Pratos: pratos});
    }, (error) => {
        return res.status(500).send({message: error});
    });
}

function atualizarPrato(req, res){
    pratoService.atualizarPrato(req.params.id, req.body)
    .then((prato) => {
        return res.send({Prato: prato});
    }, (error) => {
        return res.status(404).send({message: error});
    });
}

function removerPrato(req, res){
    pratoService.removerPrato(req.params.id)
    .then((prato) => {
        return res.send({Prato: prato});
    }, (error) => {
        return res.status(404).send({message: error});
    });
}

module.exports = {
    cadastrarPrato,
    atualizarPrato,
    buscarPrato,
    listarTodosOsPratos,
    removerPrato
}