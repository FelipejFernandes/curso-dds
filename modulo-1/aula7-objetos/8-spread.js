const pessoa = {
	nome: "Felipe",
	idade: 26,
	altura: 1.75,
	sexo: "Masculino"
}

const enderco = {
	estado: "João Pessoa",
	sigla: "JP",
	cep: "58031 - 270",
	rua: "Av. Acre - Estados, João Pessoa",
	bairro: "Estados"
}

const informacoesDoCliente = {
	...pessoa,
	...enderco,
	gift: "sim"
}
console.log(informacoesDoCliente)