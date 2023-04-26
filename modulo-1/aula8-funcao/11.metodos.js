const pessoa = {
    nome: "Felipe",
    idade: 26,
    altura: 1.75,
    profissao: "Programador",
    determinarFaixaEtaria: function () {
        if (this.idade < 21) {
            return "jovem"
        } else if (this.idade < 65) {
            return "adulto(a)"
        } else {
            return "idoso(a)"
        }
    },
    apresentacao: function () {
        console.log(`Olá! Meu nome é ${this.nome}, sou um(a) ${this.determinarFaixaEtaria()} de ${this.idade} anos e sou ${this.profissao}`)
    },
}
pessoa.apresentacao()
console.log(pessoa.determinarFaixaEtaria())