function determinarFaixaEtaria(idade) {
    if (idade < 21) {
        return "jovem"
    } else if (idade < 65) {
        return "adulto(a)"
    } else {
        return "idoso(a)"
    }
}

function apresentacao(pessoa) {
    const { nome, idade, altura, profissao } = pessoa
    console.log(`Olá! Meu nome é ${nome}, sou um(a) ${determinarFaixaEtaria(idade)} de ${idade} anos, ${altura} e sou ${profissao}`)
}

const pessoa = {
    nome: "Felipe",
    idade: 26,
    altura: 1.75,
    profissao: "Programador"
}

apresentacao(pessoa)