const express = require("express");
const app = express();

const produtos = [
    { id: 1, marca: "sony", modelo: "Bravia: Smart 4k", preco_max: 1200, polegadas: 70 },
    { id: 2, marca: "LG", modelo: "OS: Smart 4k", preco_max: 1000, polegadas: 70 }, ,
    { id: 3, marca: "Samsung", modelo: "SMTV: Smart 4k", preco_max: 1100, polegadas: 70 },
]

app.get("/", (req, res) => {
    res.send("Bem-vindo ao BRS_PLACE")
})

//Parâmetros de rota
app.get("/produtos/:id", (req, res) => {
    const idProduto = Number(req.params.id);
    let produtoFiltrado = produtos.filter((produto) => {
        return produto.id === idProduto
    })
    res.send(produtoFiltrado)
})

app.get("/produtos", (req, res) => {
    const { marca } = req.query
    console.log(marca)
    let resultado = produtos;

    if (marca) {
        resultado = produtos.filter((produto) => {
            return produto.marca === marca
        })
        if (resultado.length === 0) {
            res.send("Produto não encontrado")
        } else {
            res.send(resultado)
        }
    } else {
        res.send(resultado)
    }
})

app.listen(3000)