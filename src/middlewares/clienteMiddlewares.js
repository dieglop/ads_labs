function nomeObrigatorio(req, res, next){
    if(!req.body.nome){
        return res.status(400).json({
            message: "O nome é obrigatório"
        });
    }

    next();
}

function cpfObrigatorio(req, res, next){
    if(!req.body.cpf){
        return res.status(400).json({
            message: "O CPF é obrigatório"
        });
    }
    next();
}

function validarCPF(req, res, next){
    const cpfRegex = /^\d{3}[.]\d{3}[.]\d{3}[-]\d{2}$/;

    if(req.body.cpf && !cpfRegex.test(req.body.cpf)){
        return res.status(400).json({
            message: "O formato do CPF é: xxx.xxx.xxx-xx"
        });
    }
    next();
}

module.exports = {
    nomeObrigatorio,
    cpfObrigatorio,
    validarCPF
}