const cliente = require('../models/cliente');


async function cadastrarCliente(dados){
    try {
        const novoCliente = await cliente.create(dados);
        return novoCliente;
        
    } catch (error) {
        throw(error)
    }
}

async function buscarCliente(id){
    try {
        const clienteEncontrado = await cliente.findByPk(id);
    
        return clienteEncontrado;
        
    } catch (error) {
        throw (error)
    }
}

async function listarTodosOsClientes(){
    try {
        return await cliente.findAll();
        
    } catch (error) {
        throw(error)
    }
}

async function atualizarCliente(id, dados){
    try {
        const clienteEncontrado = await cliente.findByPk(id);
    
        if(clienteEncontrado){
            clienteEncontrado.nome = dados.nome ?? clienteEncontrado.nome;
            clienteEncontrado.cpf = dados.cpf ?? clienteEncontrado.cpf;
            await clienteEncontrado.save();
        }
    
        return clienteEncontrado;
        
    } catch (error) {
        throw(error)
    }
}

async function removerCliente(id){
    try {
        const clienteEncontrado = await cliente.findByPk(id);
    
        if(clienteEncontrado){
            await clienteEncontrado.destroy();
        }
    
        return clienteEncontrado;
        
    } catch (error) {
        throw (error)
    }
}


module.exports = {
    cadastrarCliente,
    atualizarCliente,
    buscarCliente,
    listarTodosOsClientes,
    removerCliente
}
