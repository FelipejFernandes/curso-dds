const nomes = ["Felipe", "Raquel", "Miguel"];

nomes[0] = "Lipe"
nomes[1] = "Quel"
nomes[2] = "Miguelzinho"

console.log(nomes)

/*  O vetor não é um const, e quando definimos como const não podemos modificar?
    Quando definimos o vetor como Const, o que estamos modificando não é o que está variável, ou seja,
    na variável é um array e continuamos tendo um array, o que mudamos foi o conteúdo desse array

    Pense da seguinte forma
    Quando criamos uma variável do tipo const não podemos fazer uma reatribuição a ela, ou seja, você não
    pode fazer --> nomes = [], mas podemos fazer nomes[0]= "Lipe".
    Concluimos então que podemos mudar coisas dentro dela, mas não a variável em si.

*/