//saber se um e-mail é valido
//tem que ter pelo menos um @
//tem que ter pelo menos um ponto depois do @

const email = "Felipe@google.com"

if (email.lastIndexOf('@') !== -1) {
    if (email.lastIndexOf(".")) {
        console.log("E-mail válido!")
    } else {
        console.log("E-mail não é válido!")
    }
} else {
    console.log("E-mail não é válido!")
}

/// A pesquisa ocorre de trás para frente e busca a ultima ocorrencia do char ou string
const nome = "Felipe"
console.log(nome.lastIndexOf("Felipe"))