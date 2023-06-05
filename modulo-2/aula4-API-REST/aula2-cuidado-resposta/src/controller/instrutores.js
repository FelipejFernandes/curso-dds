const { instrutores } = require("../bancoDeDados")

const listarInstrutores = (req, res) => {
    res.json(instrutores)
}

const obterInstrutor = (req, res) => {
    const id = Number(req.params.id)
    let instrutor = instrutores.find((instrutor) => {
        return instrutor.id === id
    })

    if (!instrutor) {
        res.status(404).json({ msg: "Instrutor não encontrado" })
    } else {
        res.json(instrutor)
    }

}

module.exports = { listarInstrutores, obterInstrutor }