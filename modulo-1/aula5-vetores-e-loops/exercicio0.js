//Criando um array com 5 nomes de países
const paises = ["Brasil", "Alemanha", "Itália", "Argentina", "França"]

//Adicionando um país ao fim da lista
paises.push("Inglaterra")

//Imprimindo a lista
console.log(paises)

//Removendo um país do fim da lista 
paises.pop()
/*
Armazenando o elemento removido
let elementoRemovido = paises.pop()
console.log(`Elemento Removido: ${elementoRemovido}`)
*/

//Imprimindo a lista 
console.log(paises)

//Adicionando um país no inicio da lista
paises.unshift("Chile")

console.log(paises)

//Removendo um país do início da lista
paises.shift();

//Imprindo a lista
console.log(paises)

//Imprimindo o último país da lista 
console.log(paises[paises.length - 1])

//Imprimindo o segundo país da lista
console.log(paises[1])

//imprimindo o país de indice 2
console.log(paises[2])