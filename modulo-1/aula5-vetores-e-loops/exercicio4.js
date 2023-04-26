let palavra = "arapiraca";
let quantidadeDeLetrasA = 0;

for (let char of palavra) {
    if (char === 'a') {
        quantidadeDeLetrasA++;
    }
}

console.log(quantidadeDeLetrasA)