const filtro = (pessoas, callback) => {
    for (let pessoa of pessoas) {
        if (callback(pessoa.stack)) {
            console.log(pessoa)
        }
    }


}


const pessoas = [
    { nome: "Felipe José", stack: "Back" },
    { nome: "Steve Jobs", stack: "Front" },
    { nome: "Steve Wozniak", stack: "Back" },
    { nome: "Larry Page", stack: "Front" },
    { nome: "Sergey Brin", stack: "Back" },
]

filtro(pessoas, (stack) => {
    return stack === "Back"
})