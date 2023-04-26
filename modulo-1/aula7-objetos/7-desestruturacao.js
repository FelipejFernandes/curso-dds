const pessoa = {
    nome: "Felipe",
    idade: 26,
    cidade: "Salvador",
    profissao: "CTO"
}

const { nome, idade, profissao, ...outros } = pessoa
console.log(nome, idade, profissao, outros)