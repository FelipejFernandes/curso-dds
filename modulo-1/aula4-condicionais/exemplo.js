const temIngresso = true;
const censura = 16;
let idade = 15;


/*
    Primeiro temos que verificar a se a pessoa tem ingresso, caso sim,
    verificaremos se a idade da pessoa é maior ou igual a censura do filme, 
    caso seja a pessoa poderá assistir ao filme

*/
if (temIngresso === true) {
    if (idade >= censura) {
        console.log("A pessoa pode assistir ao filme")
    } else {
        console.log("Barrada pela censura")
    }
} else {
    console.log("Barrada pela falta de ingresso.")
}