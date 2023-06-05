let { aulas, identificador_aula } = require("../bancoDeDados")
const { instrutores } = require("../bancoDeDados")

const cadastrarAulas = (req, res) => {
    const idInstrutor = Number(req.params.idInstrutor)
    const { titulo, descricao } = req.body

    if (!titulo) {
        return res.status(400).json({ "msg": "O título é obrigatorio" })
    } else if (!descricao) {
        return res.status(400).json({ "msg": "A descrição é obrigatoria" })
    }

    if (idInstrutor === null) {
        return res.status(400).json({ "msg": "Informe o ID do professor" })
    }

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === idInstrutor
    })

    if (!instrutor) {
        return res.status(400).json({ "msg": "Instrutor não encontrado" })
    }

    let aula = {
        id: identificador_aula++,
        idInstrutor: idInstrutor,
        titulo: titulo,
        descricao: descricao
    }

    aulas.push(aula)
    res.status(201).json({ "msg": "aula adicionada com sucesso" })
}

const listarAulas = (req, res) => {
    res.json(aulas)
}

const listaAulaId = (req, res) => {
    const id = Number(req.params.id)

    const aula = aulas.find((aula) => {
        return aula.id === id
    })

    if (!aula) {
        return res.status(404).json({ "msg": "Aula não encontrada!" })
    } else {
        res.json({ aula })
    }
}

const listarAulasInstrutor = (req, res) => {
    const idInstrutor = Number(req.params.idInstrutor)

    const aulas_Instrutor = aulas.filter((aula) => {
        return aula.idInstrutor === idInstrutor
    })

    if (!aulas_Instrutor) {
        return res.status(404).json({ "msg": "Nenhuma aula encontrada para o instrutor" })
    } else {
        return res.json(aulas_Instrutor)
    }
}

module.exports = { cadastrarAulas, listarAulas, listaAulaId, listarAulasInstrutor }