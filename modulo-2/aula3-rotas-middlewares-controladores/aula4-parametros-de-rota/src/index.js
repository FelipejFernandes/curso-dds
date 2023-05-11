const express = require("express");
const app = express();

const professores = [
    { id: 1, nome: "Guido", stack: "Back" },
    { id: 2, nome: "Dani", stack: "Front" },
    { id: 3, nome: "Victor", stack: "Back" },
    { id: 4, nome: "Vidal", stack: "Back" },
    { id: 5, nome: "Leo", stack: "Front" },

]

app.get("/", (req, res) => {
    res.send("Hello to the collage")
})

app.get("/professores", (req, res) => {
    res.send(professores);
})

app.get("/professores/:id", (req, res) => {
    const professorDoId = professores.find((professores) => {
        return professores.id === Number(req.params.id)
    })

    res.send(professorDoId)
})



app.listen(3000)