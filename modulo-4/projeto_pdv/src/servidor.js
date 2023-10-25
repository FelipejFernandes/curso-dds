const express = require("express");
const app = express();

const servidor = app.listen(3000, () => {
  console.log("Servidor iniciado..........");
});

module.exports = servidor;
