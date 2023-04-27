const somar = (primeiroNum, segundoNum, callback) => {
    let soma = primeiroNum + segundoNum;
    callback(soma)
}

somar(12, 13, (resultado) => {
    console.log(`O resultado da soma: ${resultado}`)
})