const pessoa = {
    nome: "João",
    idade: 12,
    profissao: "estudante",
    altura: 1.4
}

function apresentacao(pessoa) {
    console.log(`Olá! Meu nome é ${pessoa.nome}, sou um jovem de ${pessoa.idade} anos, ${pessoa.altura}m e sou ${pessoa.profissao}`)
}

apresentacao(pessoa)