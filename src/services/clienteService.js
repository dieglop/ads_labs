const db = require('../database/database');
const cliente = require('../models/cliente');



async function cadastrarCliente(dados){
    const novoCliente = await cliente.create(dados);
    return novoCliente;
}

async function buscarCliente(id){
    const clienteEncontrado = await cliente.findByPk(id);

    return clienteEncontrado;
}

async function listarTodosOsClientes(){
 
    return await cliente.findAll();
}

async function editarCliente(id, dados){
    const clienteEncontrado = await cliente.findByPk(id);

    if(clienteEncontrado){
        clienteEncontrado.nome = dados.nome ?? clienteEncontrado.nome;
        clienteEncontrado.cpf = dados.cpf ?? clienteEncontrado.cpf;
        await clienteEncontrado.save();
    }

    return clienteEncontrado;
}

async function removerCliente(id){
    const clienteEncontrado = await cliente.findByPk(id);

    if(clienteEncontrado){
        await clienteEncontrado.destroy();
    }

    return clienteEncontrado;
}


module.exports = {
    cadastrarCliente,
    editarCliente,
    buscarCliente,
    listarTodosOsClientes,
    removerCliente
}
