//Importando o express
const express = require("express")
// Criando o módulo de roteamento
const app = express();

//Criando as rotas
//Rota 0
app.get("/", (req, res) => {
    console.log(req)
    res.send("Jesus Cristo é o Senhor")
})

//Defindo a porta
app.listen(3000)