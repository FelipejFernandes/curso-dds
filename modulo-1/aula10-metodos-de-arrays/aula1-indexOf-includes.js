const lista = ["Maça", "Banana", "Manga"]
let indice = lista.indexOf("Abacate");
console.log(indice)

if (lista.includes("Abacate")) {
    console.log("Encontrei")
} else {
    console.log("Não encontrei")
}

const singular = ["Eu", "Tu", "Ele"]
let pesquisa = singular.indexOf("Ele")
console.log(singular[pesquisa]);