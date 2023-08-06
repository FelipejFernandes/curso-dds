const express = require('express')
const {
	listarCarros,
	detalharCarro,
	cadastrarCarro,
	atualizarCarro,
	excluirCarro,
} = require('./controladores/carros')
const { cadastrarUsuarios, login } = require("./controladores/usuarios")
const autenticacao = require('./middleware/autenticacao')
const rotas = express()


rotas.post('/cadastrousuarios', cadastrarUsuarios)
rotas.post('/login', login)

rotas.use(autenticacao)

rotas.get('/carro', listarCarros)
rotas.get('/carro/:id', detalharCarro)
rotas.post('/carro', cadastrarCarro)
rotas.put('/carro/:id', atualizarCarro)
rotas.delete('/carro/:id', excluirCarro)

module.exports = rotas
