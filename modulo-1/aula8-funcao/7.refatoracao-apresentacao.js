const pessoas = [{
    nome: "Felipe",
    idade: 30,
    profissao: "programador"
},
{
    nome: "Raquel",
    idade: 27,
    profissao: "administradora"
},
{
    nome: "Miguel",
    idade: 2,
    profissao: "Estudante"
}
]

function apresentacao(pessoa) {
    const { nome, idade, profissao } = pessoa
    if (idade < 25) {
        console.log(`Sou ${nome}, sou um(a) jovem(a) de ${idade} anos e sou ${profissao}`)
    } else if (idade < 65) {
        console.log(`Sou ${nome}, sou um(a) adulto(a) de ${idade} anos e sou ${profissao}`)
    } else {
        console.log(`Sou ${nome}, sou um(a) idoso(a) de ${idade} anos e sou ${profissao}`)
    }
}

for (let pessoa of pessoas) {
    apresentacao(pessoa)
}

