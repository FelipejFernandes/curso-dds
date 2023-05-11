const carros = require("../../bancoDeDados")
const filtroMarcaEcor = (id) => {
    let pesquisa = carros.filter((carro) => {
        return carro.id === id
    })
    return pesquisa
}

module.exports = filtroMarcaEcor;