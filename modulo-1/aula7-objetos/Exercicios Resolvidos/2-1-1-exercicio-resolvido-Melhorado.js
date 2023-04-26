const pessoa = {
    nome: "Felipe",
    idade: 26,
    altura: 1.75,
    cnh: false,
    apelidos: ["Cabeção", "Capacete", "Felipão", "Pinho"],


    exibirApelidos: function (apelidos) {
        for (let apelido of apelidos) {
            console.log(apelido)
        }
    }



}

const txtCNH = pessoa.cnh ? "possui CNH" : "não possui CNH";

console.log(`${pessoa.nome} tem ${pessoa.idade}, ${pessoa.altura}, ${txtCNH} seguintes apelidos:`)
pessoa.exibirApelidos(pessoa.apelidos);