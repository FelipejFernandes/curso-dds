let {instrutores ,identificadorInstrutor} = require("../bancoDeDados");

const listarInstrutores = (req, res) =>{
    res.json(instrutores)
}

const obterInstrutor = (req,res) =>{
    let instrutor = instrutores.find((elemento)=>{
        return elemento.id === Number (req.params.id) })
    if(instrutor){
        res.json(instrutor)
    }else{
        res.status(404).json({"msg": "instrutores não encontrados"})
    }
}

const cadastrarInstrutores = (req,res) =>{
    const {nome, email,stack ,status} = req.body

    if(!nome){
        return res.status(400).json({"msg":"O nome é obrigatorio"})
    }else if(!email){
        return res.status(400).json({"msg":"O e-mail é obrigatorio"})
    }else if(!stack){
        return res.status(400).json({"msg":"A stack é obrigatoria"})
    }

    let cadInstrutor = {
        id: identificadorInstrutor++,
        nome,
        email,
        stack,
        status: status ?? true
    }

    instrutores.push(cadInstrutor)

    return res.status(201).json(cadInstrutor)

}

const atualizarInstrutores = (req,res) =>{
    const id = Number (req.params.id)
    const {nome, email,stack} = req.body

    if(!nome){
        res.status(400).json({"msg":"O nome é obrigatório"})
    }else if (!email){
        res.status(400).json({"msg":"O e-mail é obrigatório"})
    }else if(!stack){
        res.status(400).json({"msg":"A stack é obrigatório"})
    }

    let instrutor = instrutores.find((instrutor)=>{
        return instrutor.id === id
    })

    if(!instrutor){
       return res.status(400).json({"msg":"Instrutor não encontrado"})
    }else{
        instrutor.nome = nome
        instrutor.email = email
        instrutor.stack = stack
    }

    res.status(203).json({"msg": "Instrutor Atualizado"})

}

const atualizarStatus = (req, res)=>{
    const id = Number(req.params.id);
    const {status} = req.body

    const instrutor = instrutores.find((instrutor)=>{
        return instrutor.id === id 
    })

    if(!instrutor){
        res.status(404).json({"msg":"Instrutor não encontrado"})
    }else{
        instrutor.status = status
        res.status(204).json({"msg":"Status atualizado"})
    }
}

const excluirInstrutores = (req,res)=>{
    const id = Number (req.params.id)

    if (!instrutores.find((instrutor)=>{return instrutor.id === id})){
        res.status(404).json({"msg":"Instrutor não encontrado!"})
    }else{
        instrutores = instrutores.filter((instrutor)=>{
            return instrutor.id !== id
        })
        return res.status(200).send()
    
    }
}

module.exports = {listarInstrutores,obterInstrutor, 
                cadastrarInstrutores, atualizarInstrutores, atualizarStatus, excluirInstrutores};