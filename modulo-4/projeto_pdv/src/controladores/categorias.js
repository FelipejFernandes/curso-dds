const knex = require('../conexao/knex');

const listarCategorias = async (req, res) => {

    try {
        const query = await knex('categorias').select('descricao')
        return res.status(200).json(query)
    } catch (error) {
        console.log(error.mensagem)
        return res.status(500).json({ mensagem: "Erro interno do servidor" })
    }
};

module.exports = {
    listarCategorias,
}