const saudacao = (imprimirDados) => {
    const nome = "Felipe";
    const idade = 26;

    imprimirDados(nome, idade)
}

const imprimirDados = (name, age) => {
    console.log("Entrei na função callback")
    if (name) {
        console.log(`Name: ${name}`)
    }
    if (age) {
        console.log(`Age: ${age}`)
    }
}

saudacao(imprimirDados)