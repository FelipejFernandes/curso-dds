//FORMA 1
// const microwave = (timer) => {
//     console.log("Iniciando o MicroWave")

//     setTimeout(ativandoMicrowave, timer)
// }

// const ativandoMicrowave = () => {
//     console.log("Processo finalizado")
// }


//FORMA 2
const microwave = (timer) => {
    console.log("Iniciando o MicroWave")
    setTimeout(() => { console.log("Finalizou!") }, timer)
}

microwave(3000)