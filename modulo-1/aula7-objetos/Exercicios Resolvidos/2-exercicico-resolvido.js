const pessoa = {
    nome: "Felipe",
    idade: 26,
    altura: 1.75,
    cnh: true,
    apelidos: ["Cabeção", "Capacete"]
}

if (pessoa.cnh) {
    console.log(`${pessoa.nome} tem ${pessoa.idade}, ${pessoa.altura}, possui CNH e os seguintes apelidos:
    - ${pessoa.apelidos[0]}
    - ${pessoa.apelidos[1]}`)
} else {
    console.log(`${pessoa.nome} tem ${pessoa.idade}, ${pessoa.altura}, não possui CNH e os seguintes apelidos:
   - ${pessoa.apelidos[0]}
   - ${pessoa.apelidos[1]}`)
}