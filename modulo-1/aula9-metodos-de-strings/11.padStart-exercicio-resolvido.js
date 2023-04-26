let dia = 1, mes = 1, ano = 2023

formatacao = function (dia, mes, ano) {
    let data = ""
    for (let i = 0; i <= 8; i += 2) {
        if (i === 2) {
            data += String(dia).padStart(2, "0").padEnd(3, "/")
        } else if (i === 4) {
            data += String(mes).padStart(2, "0").padEnd(3, "/")
        } else if (i === 8) {
            data += ano
        }
    }
    console.log(data.pa)
}

formatacao(dia, mes, ano)

/*
FORMA MAIS FÁCIL 
formatacao = function (dia, mes, ano) {
    let diaFormatado = String(dia).padStart(2, "0");
    let mesFormatado = `${mes}`.padStart(2, "0");

    console.log(`${diaFormatado}/${mesFormatado}/${ano}`)
}

formatacao(1, 1, 1991)
*/