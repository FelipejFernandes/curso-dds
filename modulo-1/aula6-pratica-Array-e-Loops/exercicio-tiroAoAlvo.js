const disparo = [0, 10, 50, 70, 80, 30]
let quantidadeAcimaDe70 = 0;

for (let tiro of disparo) {
    if (tiro > 70) {
        quantidadeAcimaDe70++
    }
}

if (quantidadeAcimaDe70 >= 3) {
    console.log(quantidadeAcimaDe70)
} else {
    console.log("ELIMINADO")
}