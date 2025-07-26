function clienteObrigatorio(req, res, next){
    if(!req.body.ClienteId){
        return res.status(400).json({
            message: "Informe o cliente"
        });
    }
    next();
}

function pratoObrigatorio(req, res, next){
    if(!req.body.pratos){
        return res.status(400).json({
            message: "Informe o prato"
        });
    }
    next();
}



module.exports = {
    clienteObrigatorio,
    pratoObrigatorio
}
