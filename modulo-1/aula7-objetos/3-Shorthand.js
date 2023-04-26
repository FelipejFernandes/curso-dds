const carro = {
    marca: "Toyota",
    modelo: "Supra",
    ano: 2023,
    potencia: 382
}

const altura = 1.75;

const pessoa = {
    nome: "Felipe",
    idade: 26,
    altura,
    peso: 80,
    carro

};

console.log(pessoa)

console.log(`O carro de ${pessoa.nome} é um ${pessoa.carro.marca} ${pessoa.carro.modelo}`)