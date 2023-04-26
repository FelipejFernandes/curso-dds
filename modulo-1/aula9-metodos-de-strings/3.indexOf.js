//saber se um e-mail é valido
//tem que ter pelo menos um @
//tem que ter pelo menos um ponto depois do @

const email = "Felipe@google.com"

if (email.indexOf('@') !== -1) {
    if (email.includes(".", email.indexOf('@'))) {
        console.log("E-mail válido!")
    } else {
        console.log("E-mail não é válido!")
    }
} else {
    console.log("E-mail não é válido!")
}


//A pesquisa ocorre de frente para trás, e busca a primeira o ocorrencia do char ou substring
console.log(email.indexOf("lipe"))