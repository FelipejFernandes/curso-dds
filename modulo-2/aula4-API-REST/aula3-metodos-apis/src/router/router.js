const express = require("express")
const {listarInstrutores, obterInstrutor, cadastrarInstrutores,atualizarInstrutores, atualizarStatus,excluirInstrutores} = require("../controller/instrutores")
const router = express();


router.get("/instrutores",listarInstrutores)

router.get("/instrutores/:id",obterInstrutor)

router.post("/instrutores",cadastrarInstrutores)

router.put("/instrutores/:id",atualizarInstrutores)

router.patch("/instrutores/:id/status",atualizarStatus)

router.delete("/instrutores/:id",excluirInstrutores)

module.exports = router