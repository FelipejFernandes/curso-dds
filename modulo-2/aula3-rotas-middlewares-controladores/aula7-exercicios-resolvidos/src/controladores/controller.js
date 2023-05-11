//Importando 
const carros = require("../bancoDeDados")
const filtroMarcaEcor = require("./tiposDeFiltro/marcaEcor")
const filtroMarca = require("./tiposDeFiltro/marca")
const filtroCor = require("./tiposDeFiltro/cor")
const filtroPorId = require("./tiposDeFiltro/id")

const listagem = (req, res) => {
    const marca = req.query.marca
    const cor = req.query.cor
    let resultado = carros
    if (marca && cor) {
        resultado = filtroMarcaEcor(marca, cor)
    } else if (marca) {
        resultado = filtroMarca(marca)
    } else if (cor) {
        resultado = filtroCor(cor)
    }
    res.send(resultado)
}

const listagenPorId = (req, res) => {
    const id = Number(req.params.id)
    const filtro = filtroPorId(id)
    if (filtro.length > 0) {
        res.send(filtro)
    } else {
        res.send("Carro não encontrado")
    }

}
module.exports = { listagem, listagenPorId }