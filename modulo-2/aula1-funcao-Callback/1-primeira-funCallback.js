const saudacao = (callback) => {
    const nome = "Felipe";
    callback(nome);
}

saudacao(function (nome) {
    console.log(`Seja bem-vindo ${nome}`);
})