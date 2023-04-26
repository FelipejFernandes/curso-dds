const pessoa = {
    nome: "Felipe",
    idade: 26,
    altura: 1.75,

    falar: function () {
        console.log("Olá, meu nome é " + this.nome + " e eu tenho " + this.idade + " anos")
    }
};

console.log(pessoa.falar());