let contador = 0;

let idDoIntervalo = setInterval(() => {
    contador++;
    console.log(contador)
    if (contador >= 5) {
        clearInterval(idDoIntervalo)
    }
}, 1000);


