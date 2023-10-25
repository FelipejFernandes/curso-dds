require("dotenv").config();
const knex = require("../conexao/knex");
const bcrypt = require("bcrypt");
const senhaSegura = process.env.SENHASEGURA;

const cadastrarCliente = async (req, res) => {
  const { nome, cpf, email } = req.body;

  const consultarCpf = await knex("clientes").where("cpf", cpf);
  const consultarEmail = await knex("clientes").where("email", email);

  if (consultarCpf.length > 0) {
    res.status(400).json({
      mensagem: "CPF já cadastrado.",
    });
  }

  if (consultarEmail.length > 0) {
    res.status(400).json({
      mensagem: "Email já cadastrado.",
    });

    const clienteCadastrado = {
      cpf,
      email,
      cpf,
    };

    await knex("clientes").insert(clienteCadastrado);
    res.status(201).json();
  }
};

const editarCliente = async (req, res) => {
  const { nome, email, cpf } = req.body;
  const { usuarioId } = req.params;

  const consultaId = await knex("clientes").where("id", usuarioId);
  const consultarCpf = await knex("clientes").where("cpf", cpf);
  const consultarEmail = await knex("clientes").where("email", email);

  if (!consultaId.length) {
    res.status(400).json({
      mensagem: "Id inválido.",
    });
  }
  if (consultarCpf.length > 0) {
    res.status(400).json({
      mensagem: "CPF já cadastrado.",
    });
  }

  if (consultarEmail.length > 0) {
    res.status(400).json({
      mensagem: "Email já cadastrado.",
    });
  }

  if (cpf) {
    await knex("clientes").update({ cpf }).where("id", usuarioId);
    res.status(201).json({
      mensagem: "CPF atualizado com sucesso!",
    });
  }

  if (email) {
    await knex("clientes").update({ email }).where("id", usuarioId);
    res.status(201).json({
      mensagem: "Email atualizado com sucesso!",
    });
  }

  if (nome) {
    await knex("clientes").update({ nome }).where("id", usuarioId);
    res.status(201).json({
      mensagem: "Nome atualizado com sucesso!",
    });
  }
};

const listarClientes = async (req, res) => {
  try {
    const consulta = await knex('clientes')
    return res.json(consulta);
  } catch (error) {
    return res.status(500).json({ 'Erro': 'Erro ao retornar a listagem de clientes' })
  }
}

const detalharClientes = async (req, res) => {
  const { id } = req.params

  if (!/^\d+$/.test(id)) {
    return res.status(400).json({ 'mensagem': 'ID inválido, digite somente número' })
  }

  try {
    const consulta = await knex('clientes').where("id", id)

    if (!consulta[0]) {
      return res.status(200).json("Não existe nenhum cliente com o Id informado")
    }

    return res.status(200).json(consulta[0])
  } catch (error) {
    return res.status(500).json({ 'Erro': 'Erro ao detalhar cliente' })
  }

}

module.exports = {
  listarClientes, 
  detalharClientes, 
  cadastrarCliente,
  editarCliente
}
