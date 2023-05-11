//Importanto o express
const express = require("express");
//Criando Roteador
const app = express();

//Importando controladores
const { filtroPorId, filtroPorParametroDePesquisa } = require("./controladores/professor_Controladores")

//Exemplo de middleware
app.use((req, res, next) => {
    console.log("Cheguei no middlware")
    next();
})


//Exemplo de middleware de rota
const validadorDeId = (req, res, next) => {
    console.log(req.params.id)
    let id = req.params.id
    if (/^\d+$/.test(id)) {
        next();
    } else {
        return res.send("Caractere inválido")
    }
    /* O que o código faz é verificar o valor do paramêtro de rota
    1º/^\d+$/.test(id) => valida se o parametro possuí somente números 
        Caso sim prossegue 
        Caso não entra no else e retorna a seguinte mensagem
    */
}

const validadorDeQtd = (req, res, next) => {
    const id = Number(req.params.id)
    if (id > 0 && id <= 5) {
        next()
    } else {
        return res.send("Id inválido")
    }
}
//antes de criar um intermediário de rota
//app.get("/professores/:id", filtroPorId)

//Após aplicar um intermediário de rota
app.get("/professores/:id", validadorDeId, validadorDeQtd, filtroPorId);


app.get("/professores", filtroPorParametroDePesquisa)
//Criando porta
app.listen(3000)