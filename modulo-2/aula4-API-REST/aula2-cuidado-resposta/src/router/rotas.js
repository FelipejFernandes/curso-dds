const express = require("express");
const { listarInstrutores, obterInstrutor } = require("../controller/instrutores")
const app = express();

app.get("/instrutores", listarInstrutores)

app.get("/instrutores/:id", obterInstrutor)

module.exports = app;