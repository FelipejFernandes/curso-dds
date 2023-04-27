const imprimir = (dados) => {
    const nome = "Felipe";
    const idade = 27;

    dados(nome, idade)
}

const dados = (nome, idade) => {
    if (nome) {
        console.log(`Nome: ${nome}`);
    }

    if (idade) {

        //Podemos simplificar essa parte
        /*const date = new Date();
        const year = date.getFullYear();*/
        //Por
        const year = new Date().getFullYear()
        console.log(`Ano nascimento: ${year - idade}`)
    }
}

imprimir(dados)