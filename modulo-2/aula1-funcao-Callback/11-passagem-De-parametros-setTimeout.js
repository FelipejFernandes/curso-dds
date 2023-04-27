const imprimirDados = (nome, idade) => {
    console.log(`Olá ${nome}, você tem ${idade} anos`)
}

setTimeout(imprimirDados, 3000, "Felipe", 26)