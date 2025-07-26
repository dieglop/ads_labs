const prato = require('../models/prato');


async function cadastrarPrato(dados) {
    try {
        const novoPrato = await prato.create(dados);
        return novoPrato;

    } catch (error) {
        throw(error)
    }
}

async function buscarPrato(id) {
    try {
       const pratoEncontrado = await prato.findByPk(id);
       return pratoEncontrado;
        
    } catch (error) {
        throw(error)
    }
}

async function listarTodosOsPratos() {
    try {
        return await prato.findAll();
        
    } catch (error) {
        throw(error)
    }
}

async function atualizarPrato(id, dados) {
    try {
        const pratoEncontrado = await prato.findByPk(id);
    
        if(pratoEncontrado){
            pratoEncontrado.nome = dados.nome ?? pratoEncontrado.nome;
            pratoEncontrado.preco = dados.preco ?? pratoEncontrado.preco;
            await pratoEncontrado.save();
        }
    
        return pratoEncontrado;
        
    } catch (error) {
        throw(error)
    }
}

async function removerPrato(id) {
    try {
        const pratoEncontrado = await prato.findByPk(id);
    
        if(pratoEncontrado){
            await pratoEncontrado.destroy();
        }
    
        return pratoEncontrado;
        
    } catch (error) {
        throw(error)
    }
}

module.exports = {
    cadastrarPrato,
    listarTodosOsPratos,
    buscarPrato,
    atualizarPrato,
    removerPrato
}
