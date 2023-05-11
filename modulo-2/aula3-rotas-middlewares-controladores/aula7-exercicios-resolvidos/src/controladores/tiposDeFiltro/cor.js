const carros = require("../../bancoDeDados")
const filtroCor = (cor) => {
    let pesquisa = carros.filter((carro) => {
        return carro.cor === cor
    })
    return pesquisa
}

module.exports = filtroCor;