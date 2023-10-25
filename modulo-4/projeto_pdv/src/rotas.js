const { Router } = require(`express`);
const rotas = Router();
const { listarCategorias } = require("./controladores/categorias");

const {
  cadastrarUsuario,
  editarUsuario,
  loginUsuario,
  detalharUsuario,
} = require("./controladores/usuario");

const { cadastrarCliente, listarClientes, detalharClientes, editarCliente } = require('./controladores/clientes')
const { validarCamposRequisicao } = require("./intermediarios/verificador");
const validarToken = require("./uteis/validarToken");

const {
  listarProdutos,
  cadastrarProduto,
  editarProduto,
  detalharProduto,
  excluirProduto
} = require("./controladores/produtos");

rotas.get("/categoria", listarCategorias);
rotas.post(
  "/usuario",
  validarCamposRequisicao(["nome", "email", "senha"]),
  cadastrarUsuario
);
rotas.post("/login", validarCamposRequisicao(["email", "senha"]), loginUsuario);

rotas.use(validarToken);

rotas.get("/usuario", detalharUsuario);

rotas.put(
  "/usuario",
  validarCamposRequisicao(["nome", "email", "senha"]),
  editarUsuario
);

rotas.post(
  "/produto",
  validarCamposRequisicao([
    "descricao",
    "quantidade_estoque",
    "valor",
    "categoria_id",
  ]),
  cadastrarProduto
);
rotas.get("/produto", listarProdutos);
rotas.put(
  "/produto/:id",
  validarCamposRequisicao([
    "descricao",
    "quantidade_estoque",
    "valor",
    "categoria_id",
  ]),
  editarProduto
);
rotas.get("/produto/:id", detalharProduto);

rotas.delete('/produtos/:id', excluirProduto);


rotas.post(
  "/cliente",
  validarCamposRequisicao(["nome", "cpf", "email"]),
  cadastrarCliente
);
rotas.put(
  "/cliente:id",
  validarCamposRequisicao(["nome", "cpf", "email"]),
  editarCliente
);

rotas.post("/clientes", 
validarCamposRequisicao(["nome", "email", "cpf"]), 
cadastrarCliente);

rotas.get("/clientes", listarClientes)
rotas.get("/clientes/:id", detalharClientes)

module.exports = rotas;
