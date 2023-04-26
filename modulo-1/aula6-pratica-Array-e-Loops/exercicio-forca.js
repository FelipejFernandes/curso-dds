const palavra = "abelha";
let char = "a";
let quantidadeDeAcertos = 0;

for (let letra of palavra) {
    if (letra === char) {
        quantidadeDeAcertos++
    }
}

console.log(quantidadeDeAcertos)