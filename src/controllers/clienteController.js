/** *
*@param {import('express').Request} req
*@param {import('express').Response} res
*/

const clienteService = require('../services/clienteService');

function cadastrarCliente(req, res){
    clienteService.cadastrarCliente(req.body)
    .then((clienteNovo) => {
       return res.status(201).send({
        message: "Cliente cadastrado com sucesso!",
        cliente: clienteNovo
       })
    }, (error) => {
        return res.status(500).send({message: error});
    });
}

function buscarCliente(req, res){
    clienteService.buscarCliente(req.params.id)
    .then((cliente) => {
        return res.send({Cliente: cliente});
    }, (error) => {
        return res.status(500).send({message: error});
    })
}

function listarTodosOsClientes(req, res){   
    clienteService.listarTodosOsClientes()
    .then((clientes) => {
        return res.send({Clientes: clientes});
    }, (error) => {
        return res.status(500).send({message: error});
    } );

}

function editarCliente(req, res){
    clienteService.editarCliente(req.params.id, req.body)
    .then((cliente) => {
        return res.send({Cliente: cliente});
    }, (error) => {
        return res.status(400).send({message: error});
    });
}

function removerCliente(req, res){
    clienteService.removerCliente(req.params.id)
    .then((cliente) => {
        return res.send({Cliente: cliente});
    }, (error) => {
        res.status(500).send({message: error});
    });
}

module.exports = {
    cadastrarCliente,
    editarCliente,
    buscarCliente,
    listarTodosOsClientes,
    removerCliente
}