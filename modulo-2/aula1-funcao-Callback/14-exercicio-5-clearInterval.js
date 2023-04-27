const microWave = (timer) => {
    let number = 1;

    const contador = () => {
        console.log(number)
        number++
        if (number > timer / 1000) {
            console.log("Finalizou")
            clearInterval(idInterval)
        }
    }

    const idInterval = setInterval(contador, 1000)
}

microWave(5000)
