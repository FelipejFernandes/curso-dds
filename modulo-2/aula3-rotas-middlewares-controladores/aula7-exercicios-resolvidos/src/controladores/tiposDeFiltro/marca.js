const carros = require("../../bancoDeDados")
const filtroMarca = (marca) => {
    let pesquisa = carros.filter((carro) => {
        return carro.marca === marca
    })
    return pesquisa
}

module.exports = filtroMarca;