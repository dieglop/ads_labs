function nomeDoPratoObrigatorio(req, res, next){
    if(!req.body.nomePrato){
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



module.exports = {
    nomeDoPratoObrigatorio, 
    precoDoPratoObrigatorio
}