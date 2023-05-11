// Importando o express
const express = require("express");
const { listagem, listagenPorId } = require("./controladores/controller")
const autenticacao = require("./controladores/autenticacao")
//Criando rota
const app = express();

app.use(autenticacao)
//rota 1 => listagem geral
app.get("/carros/", listagem);

//rota 2 => filtro por id
app.get("/carros/:id", listagenPorId)


app.listen(3000)



