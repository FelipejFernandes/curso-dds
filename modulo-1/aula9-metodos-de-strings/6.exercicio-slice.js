//Exercicio - Slice
//Desenvolva um código para obter apenas dois 
//digitos do estado de um cidade

const cidade = "São Paulo-SP"
const penultimoIndex = cidade.length - 2
// O penúltimo index é sempre o tamanho do array - 2
let estado = cidade.slice(penultimoIndex)
console.log(estado)
