require("dotenv").config();
const knex = require("../conexao/knex");
const jwt = require("jsonwebtoken");
const senhaSegura = process.env.SENHASEGURA;


const validarToken = async (req, res, next) => {
    const authorization = req.headers.authorization;
    if (!authorization) {
        return res.status(401).json({ mensagem: 'Token não informado!' });
    };

    const token = authorization.replace('Bearer ', '');

    try {

        const tokenUsuario = jwt.verify(token, senhaSegura);
        const usuario = await knex('usuarios').where('id', tokenUsuario.id);

        if (!usuario) {
            return res.status(401).json({ mensagem: 'Usuário não encontrado!' })
        };

        req.usuarioId = tokenUsuario.id;

        next();

    } catch (error) {
        return res.status(401).json({ mensagem: 'Não autorizado!' })
    };

};

module.exports = validarToken;