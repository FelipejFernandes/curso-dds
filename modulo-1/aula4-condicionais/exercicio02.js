let valorDoProduto = 100;
let numeroDeParcelas = 0;

if (numeroDeParcelas === 1) {
    console.log("Você deve pagar: R$",
        (valorDoProduto - (valorDoProduto * 10) / 100), ",pois tem 10% de desconto");
}
else if (numeroDeParcelas >= 2 && numeroDeParcelas <= 6) {
    console.log(`Você deverá pagar: ${numeroDeParcelas}X RS ${(valorDoProduto / numeroDeParcelas).toFixed(2)} sem Juros`)
} else if (numeroDeParcelas >= 7 && numeroDeParcelas <= 12) {

    let valorApagarComJuros = valorDoProduto * Math.pow((1 + 0.01), numeroDeParcelas)
    console.log(`Você deve pagar em: ${numeroDeParcelas}X de RS ${((valorApagarComJuros) / numeroDeParcelas).toFixed(2)} totalizando R$ ${valorApagarComJuros.toFixed(2)}, devido a incidencia de juros`)

} else {
    console.log("Número de parcelas INVÁLIDO")
}