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

}

let totalDoConsumo = 0
for (let produto of produtosConsumidos) {
    totalDoConsumo += produto.quantidade * produto.valorUnit;
}

const totalFormatado = (totalDoConsumo / 100).toFixed(2)
console.log(`Olá ${cartaoDeConsumo.pessoa.nome}, o total à pagar é: R$ ${totalFormatado}`)