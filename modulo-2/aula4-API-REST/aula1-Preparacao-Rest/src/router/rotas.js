const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Rota de Livros")
})

module.exports = app;
