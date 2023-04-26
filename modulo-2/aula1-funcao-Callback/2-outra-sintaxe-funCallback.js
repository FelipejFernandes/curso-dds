// FORMA 1
// function saudacao(callback) {
//     const nome = "Felipe";
//     callback(nome);
// }

// function apresentacao(nome) {
//     console.log(`Olá, ${nome}`)
// }

// saudacao(apresentacao)]

// FORMA 2 
// const saudacao = (callBack) => {
//     const nome = "Felipe"
//     callBack(nome);
// }

// const apresentacao = (nome) => {
//     console.log(`Hello ${nome}`);
// }

// saudacao(apresentacao)

// 3 FORMA
const saudacao = (callBack) => {
    const nome = "Felipe";
    callBack(nome);
}

saudacao((nome) => {
    console.log(`Ciao ${nome}`)
})