const pessoa = {
    nome: "Felipe",
    idade: 26
}

const produtosConsumidos = [
    {
        produto: "Coca-Cola",
        valorUnit: 500,
        quantidade: 2,
    },
    {
        produto: "Hamburger",
        valorUnit: 2500,
        quantidade: 1
    },
    {
        produto: "Batata frita",
        valorUnit: 750,
        quantidade: 2
    }


]

const cartaoDeConsumo = {
    pessoa,
    produtosConsumidos,

    totalDoConsumo: function () {
        let totalDoConsumo = 0;
        for (let produto of produtosConsumidos) {
            totalDoConsumo += produto.valorUnit * produto.quantidade;
        }

        totalDoConsumo = totalDoConsumo / 100
        console.log(totalDoConsumo)

    }
}

console.log(cartaoDeConsumo.pessoa.nome)
console.log(pessoa.idade)
cartaoDeConsumo.pessoa["idade"] = 27;
console.log(pessoa.idade)

console.log(cartaoDeConsumo.produtosConsumidos[0].produto)
console.log(cartaoDeConsumo.produtosConsumidos[produtosConsumidos.length - 1].valorUnit)