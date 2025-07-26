function nomeDoPratoObrigatorio(req, res, next){
    if(!req.body.nome){
        return res.status(400).json({
            message: "Informe o nome do prato"
        });
    }
    next();
}

function validarNomeDoPrato(req, res, next){
    const padraoNome = /^[a-z\s]{3,50}$/i;

    if(req.body.nome && !padraoNome.test(req.body.nome)){
        return res.status(400).json({
            message: "O nome do prato deve conter apenas letras, no mínimo 3 e máximo 50"
        })
    }
    next();
}

function precoDoPratoObrigatorio(req, res, next){
    if(!req.body.preco){
        return res.status(400).json({
            message: "Informe o preço do prato"
        });
    }
    next();
}

function validarFormatoPreco(req, res, next){
    const padraoPreco = /^\d{1,5}[.]\d{2}$/;

    if(req.body.preco && !padraoPreco.test(req.body.preco)){
        return res.status(400).json({
            message: "Formato do preço incorreto!"
        })
    }

    next();
}



module.exports = {
    nomeDoPratoObrigatorio, 
    validarNomeDoPrato,
    precoDoPratoObrigatorio,
    validarFormatoPreco
}