const db = require('../database/database');
const prato = require('../models/prato');



async function cadastrarPrato(dados) {
    const novoPrato = await prato.create(dados);
    return novoPrato;
}

async function buscarPrato(id) {
    const pratoEncontrado = await prato.findByPk(id);
    return pratoEncontrado;
}

async function listarTodosOsPratos() {
    return await prato.findAll();
}

async function atualizarPrato(id, dados) {
    const pratoEncontrado = await prato.findByPk(id);

    if(pratoEncontrado){
        pratoEncontrado.nome = dados.nome ?? pratoEncontrado.nome;
        pratoEncontrado.preco = dados.preco ?? pratoEncontrado.preco;
        await pratoEncontrado.save();
    }

    return pratoEncontrado;
}

async function removerPrato(id) {
    const pratoEncontrado = await prato.findByPk(id);

    if(pratoEncontrado){
        await pratoEncontrado.destroy();
    }

    return pratoEncontrado;
}

module.exports = {
    cadastrarPrato,
    listarTodosOsPratos,
    buscarPrato,
    atualizarPrato,
    removerPrato
}
