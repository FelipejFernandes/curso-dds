const palavras = ["caveia", "manha", "cave"]
let primeiraLetra = "as", segundaLetra = "v";
let encontrou = false;

for (let letra of palavras) {
    if (letra[0] === primeiraLetra && letra[1] === segundaLetra) {
        console.log(letra)
        encontrou = true
    }
}

if (!encontrou) {
    console.log("NENHUMA")
}

