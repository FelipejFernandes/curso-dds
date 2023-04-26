const pessoa = {
    nome: "Felipe",
    idade: 26,
    altura: 1.75,
    cnh: true,
    apelidos: ["Cabeção", "Capacete"],


}

if (pessoa.cnh) {
    console.log(`${pessoa.nome} tem ${pessoa.idade}, ${pessoa.altura}, possui CNH e os seguintes apelidos:`)
    for (let apelido of pessoa.apelidos) {
        console.log(apelido)
    }
} else {
    console.log(`${pessoa.nome} tem ${pessoa.idade}, ${pessoa.altura}, não possui CNH e os seguintes apelidos:`)
    for (let apelido of pessoa.apelidos) {
        console.log(apelido)
    }
}