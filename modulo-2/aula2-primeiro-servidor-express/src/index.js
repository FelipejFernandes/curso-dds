const express = require("express");

const app = express();

app.get("/home", (requisicao, resposta) => {
    resposta.send("Hello world! This is my first server express")
})

app.listen(3000)