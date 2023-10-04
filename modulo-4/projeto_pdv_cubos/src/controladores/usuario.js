const knex = require("../conexao/knex")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const senhaSegura = require('../conexao/senhaCriptografia')

const existeEmail = async (email) =>{
    const existeEmail = await knex('usuarios').where('email',email)
    return existeEmail
}

// const cadastro = async(req,res)=>{
//     const {nome, email,senha} = req.body
//     if(!nome || !email ||!senha){
//         return res.status(400).json({'mensagem':'Informe nome, email e senha'})
//     }
//     try {
//         const validacaoEmail = await existeEmail(email)
//         if (validacaoEmail[0]){
//             return res.status(400).json({'mensagem':'Esse e-mail já foi cadastrado na plataforma'})
//         }else{
//             const senhaCript = await bcrypt.hash(senha,5)
//             const cadastrar = await knex('usuarios').insert({nome,email,senha :senhaCript}).returning('*')
//             return res.status(200).json(cadastrar)
//         }
//     } catch (error) {
//         return res.status(500).json({'Erro':'Erro ao cadastrar usuário'})
//     }
// }


const login = async(req,res)=>{
    const {email, senha} = req.body

    if(!email || !senha){
        return res.status(400).json({'mensagem':'Informe e-mail e senha'})
    }

    try {
        const login = await existeEmail(email)
        if(!login[0]){
            return res.status(404).json({'mensagem':'Usuário não encontrado'})
        }else{
            const autenticacao = await bcrypt.compare(senha,login[0].senha)
            if(autenticacao){
                const token = jwt.sign({id: login[0].id},senhaSegura,{expiresIn:'8'})
                const usuario = {
                    nome:login[0].nome,
                    email:login[0].email
                }
                return res.status(200).json({usuario,token})
            }else{
                return res.status(404).json({'mensagem':'Usuário ou senha inválida'})
            }
        }
    } catch (error) {
        return res.status(500).json({'mensagem':'Erro na requisição'})
    }
}


module.exports = {login}