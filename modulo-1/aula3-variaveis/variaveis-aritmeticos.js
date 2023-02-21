let x = 10, y = 2, resultado = null;
let mensagem = null;
//Soma
resultado = x + y;
mensagem = "O resultado da soma de " + x + " e " + y + " é " + resultado;
console.log(mensagem)

//Subtração
resultado = x - y;
mensagem = "O resultado da subtração de " + x + " e " + y + " é " + resultado;
console.log(mensagem);

//Multiplicação
resultado = x * y;
mensagem = "O resultado da multiplicaçaõ de " + x + " e " + y + " é " + resultado;
console.log(mensagem);

//Divisão
resultado = x / y;
mensagem = "O resultado da divisão de " + x + " e " + y + " é " + resultado;
console.log(mensagem)


//Simplificando código com template string
resultado = x + y;
console.log(`O resultado da soma de ${x} e ${y} é ${resultado}`)

resultado = x - y;
console.log(`O resultado da subrtracao de ${x} e ${y} é ${resultado}`)

resultado = x * y;
console.log(`O resultado da multiplicação de ${x} e ${y} é ${resultado}`)

resultado = x / y;
console.log(`O resutado da divisão de ${x} e ${y} é ${resultado}`)