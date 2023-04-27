const buscarFruta = (frutas, callback) => {
    //O for pecorre todos os elementos do array
    for (let fruta of frutas) {
        if (callback(fruta)) {
            console.log("Encontrei a fruta no array")
            return;
        }
    }
    console.log("Não encontrei a fruta")
}

const frutas = ["Banana", "Maçã", "Perâ", "Manga"]
buscarFruta(frutas, (fruta) => {
    return fruta === "Manga"
})