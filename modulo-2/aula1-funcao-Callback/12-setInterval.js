const relogio = () => {
    console.clear()
    console.log("Clock")
    let d = new Date
    console.log(d.toLocaleTimeString())
}

setInterval(relogio, 1000)