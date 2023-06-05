const express = require("express")
const { listarInstrutores, obterInstrutor, cadastrarInstrutores, atualizarInstrutores, atualizarStatus, excluirInstrutores } = require("../controller/instrutores-controller")
const { cadastrarAulas, listarAulas, listaAulaId, listarAulasInstrutor } = require("../controller/aulas-controller")
const router = express();

router.get("/instrutores", listarInstrutores)

router.get("/instrutores/:id", obterInstrutor)

router.post("/instrutores", cadastrarInstrutores)

router.put("/instrutores/:id", atualizarInstrutores)

router.patch("/instrutores/:id/status", atualizarStatus)

router.delete("/instrutores/:id", excluirInstrutores)

router.post("/instrutores/:idInstrutor/aulas", cadastrarAulas)

router.get("/aulas", listarAulas)

router.get("/aulas/:id", listaAulaId)

router.get("/instrutores/:idInstrutor/aulas", listarAulasInstrutor)


module.exports = router