function nomeDoPratoObrigatorio(req, res, next){
    if(!req.body.nome){
        return res.status(400).json({
            message: "Informe o nome do prato"
        });
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

    if(req.body.preco && !padraoPreco){
        res.status(400).json({
            message: "Formato do preço incorreto!"
        })
    }

    next();
}



module.exports = {
    nomeDoPratoObrigatorio, 
    precoDoPratoObrigatorio,
    validarFormatoPreco
}