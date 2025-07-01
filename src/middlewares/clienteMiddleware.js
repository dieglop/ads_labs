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

function formatoCPF(req, res, next){
    const cpfRegex = /^\d{3}[.]\d{3}[.]\d{3}[-]\d{2}$/;

    if(req.body.cpf && !cpfRegex.test(req.body.cpf)){
        return res.status(400).json({
            message: "O formato do CPF é: xxx.xxx.xxx-xx"
        });
    }
    next();
}

function validarCPF(req, res, next){
    const cpf = req.body.cpf.replace(/[^\d]+/g, '');
    const cpfArray = cpf.split('').map(Number);

    const novePrimeiros = cpfArray.slice(0,9);

    const calcDigito = (slice, pesoInicial) => {
        const soma = slice.reduce((acc, val, idx) => acc + val * (pesoInicial - idx), 0);
        const resto = soma % 11;
        return resto < 2 ? 0 : 11 - resto;
    };

    const digito1 = calcDigito(cpfArray.slice(0, 9), 10);
    const digito2 = calcDigito(cpfArray.slice(0,10), 11);

    if(!(digito1 === cpfArray[9] && digito2 === cpfArray[10])){
        return res.status(400).json({
            message: "Informe um CPF válido"
        });
    }

    next();
}

module.exports = {
    nomeObrigatorio,
    cpfObrigatorio,
    formatoCPF,
    validarCPF
}