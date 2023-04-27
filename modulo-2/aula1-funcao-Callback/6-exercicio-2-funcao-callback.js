const calculoImc = (altura, peso, callbackImc) => {
    let imc = peso / Math.pow(altura, 2);

    callbackImc(imc)
}

calculoImc(1.75, 88, (imc) => {
    console.log(`O IMC: ${imc}`)
    if (imc < 18) {
        console.log(`Desnutrição`)
    } else if (imc >= 18 && imc < 25) {
        console.log(`Normal`)
    } else {
        console.log(`Sobrepeso`)
    }
})