const express = require("express")
const usuario = require("../controladores/usuario")
const rotas = express()

// rotas.post("/cadastrar",usuario.cadastro)
rotas.get("/login",usuario.login)

module.exports = rotas