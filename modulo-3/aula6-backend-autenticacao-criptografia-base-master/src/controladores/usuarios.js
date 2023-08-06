const pool = require("../conexao")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const sec = require("../senhaJWT")

const cadastrarUsuarios = async (req, res) => {
    const { nome, email, senha } = req.body

    try {
        const senhaCriptografada = await bcrypt.hash(senha, 10)
        const query = 'INSERT INTO usuarios (nome,email,senha) VALUES ($1,$2,$3) returning*'
        const { rows } = await pool.query(query, [nome, email, senhaCriptografada])


        return res.status(201).json(rows[0])


    } catch (error) {
        return res.status(500).json({ 'msg': 'Erro interno no servidor' })
    }

}

const login = async (req, res) => {
    const { email, senha } = req.body

    try {
        const query = "SELECT * FROM usuarios WHERE email = $1"
        const usuario = await pool.query(query, [email]);

        if (usuario.rowCount === 0) {
            return res.status(404).json({ 'msg': 'Usuario não encotrado' })
        }
        const senhaCript = usuario.rows[0].senha
        const validacao = await bcrypt.compare(senha, senhaCript)

        if (validacao) {
            const token = jwt.sign({ id: usuario.rows[0].id }, sec, { expiresIn: '8h' })

            const { senha: _, ...usuarioLogado } = usuario.rows[0]
            return res.status(200).json({ usuarioLogado, token })

        } else {
            return res.status(400).json({ 'msg': 'E-mail ou senha inválida' })
        }
    } catch (error) {
        res.status(500).json({ 'msg': 'Erro no servidor' })
    }
}

module.exports = { cadastrarUsuarios, login }