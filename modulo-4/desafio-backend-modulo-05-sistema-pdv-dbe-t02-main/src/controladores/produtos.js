require("dotenv").config();
const knex = require("../conexao/knex");
const bcrypt = require("bcrypt");
const senhaSegura = process.env.SENHASEGURA;

const listarProdutos = async (req, res) => {
    const categoria_id = req.query.categoria_id;

    try {
        if (categoria_id) {
            const consultarProdutos = await knex('produtos').where('categoria_id', categoria_id);
            return res.status(200).json(consultarProdutos);
        } else {
            const consultarProdutos = await knex('produtos');
            return res.status(200).json(consultarProdutos);
        };

    } catch (error) {
        console.log(error.message);
        return res.status(500).json("Erro de requisição");
    };
};


const cadastrarProduto = async (req, res) => {
    const { descricao, quantidade_estoque, valor, categoria_id } = req.body;
    try {
        const verificarCategoriaExistente = await knex("categorias").where(
            "id",
            categoria_id
        );
        if (verificarCategoriaExistente.length < 1) {
            return res.status(400).json({
                mensagem: "A categoria informada não existe!",
            });
        }

        const novoProdutoCadastrado = {
            descricao: descricao,
            quantidade_estoque: quantidade_estoque,
            valor: valor,
            categoria_id: categoria_id,
        };

        await knex("produtos").insert(novoProdutoCadastrado);

        return res.status(201).json();
    } catch (error) {
        return res.status(400).json({
            mensagem: error.message,
        });
    }
};

const editarProduto = async (req, res) => {
    const { id } = req.params
    const { descricao, quantidade_estoque, valor, categoria_id } = req.body;
    const idDoProduto = await knex('produtos').where('id', id).first();
    if (!idDoProduto) {
        return res.status(404).json({ mensagem: "Informação inválida." })
    };
    const categoriaIdDoProduto = await knex('categorias').where('id', categoria_id).first();
    if (!categoriaIdDoProduto) {
        return res.status(404).json({ mensagem: "Informação inválida." })
    };

    try {
        const atualizarProduto = await knex('produtos')
            .update({ descricao: descricao, quantidade_estoque: quantidade_estoque, valor: valor, categoria_id: categoria_id })
            .where('id', id);
        return res.status(204).json();
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ mensagem: "Erro interno do servidor" })
    }
};

const detalharProduto = async (req, res) => {
    const produtoId = req.params.id;
    try {
        let produtoDetalhado = await knex('produtos').where('id', produtoId)
        if (produtoDetalhado.length <= 0) {
            return res.status(400).json({ mensagem: "Id de produto não existe!" });
        }else{
            produtoDetalhado = produtoDetalhado[0];
        };
        return res.status(200).json(produtoDetalhado);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ mensagem: "Erro interno do servidor" });
    };


};


const excluirProduto = async (req, res) => {
    const produtoId = req.params.id;
    try {
        const produto = await knex("produto").where("id", produtoId).first();

        if (!produto) {
            return res.status(400).json({ mensagem: "Produto não localizado." });
        }
        await knex("protudos").where("id", produtoId).del();
        return res.status(200).json({ mensagem: "Produto removido" });
    } catch (error) {
        return res.status(500), json({ mensagem: "Erro na requisição", error: error.menssagem })
    }
};


module.exports = {
    listarProdutos,
    editarProduto,
    cadastrarProduto,
    detalharProduto,
    excluirProduto
};
