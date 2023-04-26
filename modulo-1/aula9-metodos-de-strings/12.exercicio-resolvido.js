//Transforma "felipe joseph zimmerman" em "Felipe Joseph Zimmerman"

primeiraLetraMaiuscula = function (nome) {
    let arrayDeNomes = nome.split(" ");
    let nomeFormatado = " "
    for (let nome of arrayDeNomes) {
        nomeFormatado += nome.replace(nome[0], nome[0].toUpperCase()) + " "
    }
    //O trim retira qualquer espaço em branco no início ou fim
    return nomeFormatado.trim()
}

console.log(primeiraLetraMaiuscula("felipe joseph zimmerman"))

