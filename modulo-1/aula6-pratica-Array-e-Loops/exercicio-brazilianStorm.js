const notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100]
let maiorNota = notas[0];
let menorNota = notas[0];
let notaFinal = 0;


for (let nota of notas) {
    notaFinal += nota;

    if (maiorNota < nota) {
        maiorNota = nota;
    }

    if (menorNota > nota) {
        menorNota = nota;
    }
}

notaFinal = (notaFinal - (maiorNota + menorNota)) / (notas.length - 2)

console.log(notaFinal)
