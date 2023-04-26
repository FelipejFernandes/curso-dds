function determinarFaixaEtaria(idade) {
    if (idade <= 21) {
        return "Jovem"
    } else if (idade <= 65) {
        return "Adulto(a)"
    } else {
        return "Idoso(a)"
    }
}


/*let faixaEtaria = determinarFaixaEtaria(21)
console.log(faixaEtaria)
*/
//Podemos fazer o mesmo processo acima da seguinte forma
console.log(determinarFaixaEtaria(70))

