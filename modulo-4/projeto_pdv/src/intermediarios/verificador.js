//intermediário genérico para verificar campos de todos os endpoints
const validarCamposRequisicao = (arrayCampos) => (req, res, next) => {
  for (const item of arrayCampos) {
    if (!req.body[item]) {
      return res
        .status(400)
        .json({ mensagem: `O campo ${item} é obrigatório` });
    }
  }
  next();
};

module.exports = {
  validarCamposRequisicao,
};
