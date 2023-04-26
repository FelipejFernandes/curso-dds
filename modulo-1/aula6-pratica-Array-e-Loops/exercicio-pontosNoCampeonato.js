const resultado = ["V", "V", "E", "E"];
let pontos = 0;

for (let partida of resultado) {
    if (partida === "V") {
        pontos += 3;
    } else if (partida === "E") {
        pontos += 1;
    }
}

console.log(pontos);