const precos = [20, 15, 8, 2, 12];
//Indice         0  1  2  3  4

let prejuizo = [];
let menor = 0;


for (let i = 0; i < precos.length; i++) {
    for (let i2 = i + 1; i2 < precos.length; i2++) {
        if (precos[i] > precos[i2]) {
            prejuizo.push(precos[i] - precos[i2])
        }
    }
}
menor = prejuizo[0]
for (let menorPrejuizo of prejuizo) {
    if (menor > menorPrejuizo) {
        menor = menorPrejuizo
    }
}
console.log(menor)