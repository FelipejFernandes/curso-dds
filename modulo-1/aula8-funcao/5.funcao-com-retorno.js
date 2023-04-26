function verificarMaiorIdade(idade) {
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
}

let valorRetornadoPelaFuncao = verificarMaiorIdade(26);
console.log(valorRetornadoPelaFuncao)