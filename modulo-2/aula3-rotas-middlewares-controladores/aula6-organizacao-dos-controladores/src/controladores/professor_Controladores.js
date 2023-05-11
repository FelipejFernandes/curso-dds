const professores = require("../bancoDeDados")

const filtroPorId = (req, res) => {
    console.log("Passei no primeiro middleware")
    const id = Number(req.params.id);
    let professorFiltrado = professores.filter((professor) => {
        return professor.id === id
    })
    res.send(professorFiltrado)
}

const filtroPorParametroDePesquisa = (req, res) => {
    const { stack } = req.query
    if (stack) {
        let professorFiltrado = professores.filter((professor) => {
            return professor.stack === stack
        })
        if (professorFiltrado.length === 0) {
            res.send("Nenhum professor encontrado com a stack pesquisada")
        } else {
            res.send(professorFiltrado)
        }
    } else {
        res.send(professores)
    }
}

module.exports = { filtroPorId, filtroPorParametroDePesquisa }