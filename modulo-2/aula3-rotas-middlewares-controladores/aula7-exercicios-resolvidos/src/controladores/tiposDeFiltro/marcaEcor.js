const carros = require("../../bancoDeDados")
const filtroMarcaEcor = (marca, cor) => {
    let pesquisa = carros.filter((carro) => {
        return carro.marca === marca || carro.cor === cor
    })
    return pesquisa
}

module.exports = filtroMarcaEcor;