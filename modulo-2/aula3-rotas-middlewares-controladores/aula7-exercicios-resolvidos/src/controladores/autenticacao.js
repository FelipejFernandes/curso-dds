const autenticacao = (req, res, next) => {
    let { senha } = req.query
    console.log(senha)
    if (!senha) {
        res.send("A senha não foi informada")
    } else if (senha === "carros123") {
        next()
    } else {
        res.send("Senha inválida")
    }
}

module.exports = autenticacao