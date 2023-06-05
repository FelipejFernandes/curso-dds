//Importando a biblioteca do express
const express = require("express")
const rotas = require("./router/rotas")
//Criando o roteado
const app = express();

//Criando um middleware que informa que as req devem vir no formato .JSON
app.use(express.json())
//Criando Rota
app.use(rotas)

//Criando porta
app.listen(3000)