const jwt = require("jsonwebtoken")
const sec = require("../senhaJWT")

const autenticacao = (req, res, next) => {
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({ mensagem: "Não autorizado" })
    }

    const token = authorization.split(" ")[1]

    try {
        const validacao = jwt.verify(token, sec)

        next()

    } catch (error) {
        return res.status(401).json({ mensagem: "Não autorizado" })
    }


}

module.exports = autenticacao