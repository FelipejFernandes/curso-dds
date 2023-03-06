const temIngresso = true;
const censura = 16;
const idade = 14;
let estaComOsPais = true;

if (temIngresso) {
    if (idade >= censura || estaComOsPais) {
        console.log("Pode assistir ao filme")
    }
    else {
        console.log("Barrado!")
    }
} else {
    console.log("Barrado!")
}