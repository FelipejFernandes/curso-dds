const stringCorrompida = "*Canis %lupus )familiaris"
let stringPurificada = "";

for (let string of stringCorrompida) {
    if (string !== "!" && string !== "@" && string !== "#" && string !== "$"
        && string !== "%" && string !== "&" && string !== "*" && string !== "("
        && string !== ")" && string != ".") {
        stringPurificada += string
    }
}
console.log(stringPurificada);
