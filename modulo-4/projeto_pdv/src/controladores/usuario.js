require("dotenv").config();
const knex = require("../conexao/knex");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const senhaSegura = process.env.SENHASEGURA;
const { query } = require("express");

const cadastrarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const consultarEmailRepetido = await knex("usuarios").where("email", email);
    if (consultarEmailRepetido.length > 0) {
      return res.status(400).json({
        mensagem: "O email informado já foi cadastrado por outro usuário.",
      });
    }
    console.log(senha)
    const senhaCriptografada = await bcrypt.hash(senha, 10);
    const novoUsuarioCadastrado = {
      nome: nome,
      email: email,
      senha: senhaCriptografada,
    };

    await knex("usuarios").insert(novoUsuarioCadastrado);

    return res.status(204).json();
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      mensagem: error.message,
    });
  }
};

const loginUsuario = async (req, res) => {
  const { email, senha } = req.body;
  try {
    const login = await knex("usuarios").where("email", email);
    const autenticacao = await bcrypt.compare(senha, login[0].senha);
    if (autenticacao) {
      const token = jwt.sign({ id: login[0].id }, senhaSegura, {
        expiresIn: "8h",
      });
      const usuario = {
        nome: login[0].nome,
        email: login[0].email,
      };
      return res.status(200).json({ usuario,token});
    } else {
      return res.status(404).json({ mensagem: "Usuário ou senha inválida" });
    }
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro na requisição" });
  }
};

const editarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;
  const usuarioId = req.usuarioId;

  try {
    if (!nome && !email && !senha) {
      return res.status(400).json({
        mensagem: "Informe o campo que deseja atualizar! ",
      });
    }
    if (email) {
      const consultaEmail = await knex("usuarios").where("email", email);

      if (consultaEmail.length > 0) {
        return res.status(400).json({
          mensagem: "O email já está sendo utilizado.",
        });
      } else {
        const atualizarEmailUsuario = await knex("usuarios")
          .update({ email })
          .where("id", usuarioId);

        res.status(200).json({ mensagem: "Informações atualizadas." });
      }
    }
    if (nome) {
      const atualizarNomeUsuario = await knex("usuarios")
        .update({ nome })
        .where("id", usuarioId);

      return res.status(201).send();
    }

    if (senha) {
      const senhaCriptografada = await bcrypt.hash(senha, 10);

      const atualizarSenhaUsuario = await knex("usuarios")
        .update({ senha: senhaCriptografada })
        .where("id", usuarioId);
      return res.status(204).json();

    } else {
      return res.status(400).json({
        mensagem: "O email informado já está cadastrado"
      });    }
  } catch (error) {
    return res.status(500).json({
      mensagem: "Erro interno do servidor"
    });
  }
};

const detalharUsuario = async (req, res) => {
  const usuarioId = req.usuarioId;

  try {
    const consultarUsuario = await knex("usuarios").where("id", usuarioId);

    const consulta = await query(consultarUsuario);
    if (!consulta) {
      res.status(400).json({
        mensagem: "Usuario não cadastrado.",
      });
    }
    const usuario = {
      id: consultarUsuario[0].id,
      nome: consultarUsuario[0].nome,
      email: consultarUsuario[0].email,
    };
    res.status(200).json(usuario);
  } catch (error) {
    return res.status(500).json({
      mensagem: error.message,
    });
  }
};

module.exports = {
  cadastrarUsuario,
  editarUsuario,
  loginUsuario,
  detalharUsuario,
};
