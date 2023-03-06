let valorDoProduto = 100;
let numeroDeParcelas = 3;

if (numeroDeParcelas === 1) {
    console.log("Situação 1: Caso queira pagar a vista o valor será de: R$",
        (valorDoProduto - (valorDoProduto * 10) / 100));
}
else {
    console.log(`Situação 2: Caso queira parcelar o valor ficará de: ${numeroDeParcelas}X RS ${(valorDoProduto / numeroDeParcelas).toFixed(2)}`)
}