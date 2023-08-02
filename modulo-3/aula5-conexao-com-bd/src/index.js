const express = require('express')
//const { Client } = require('pg');
const pool = require('./conexao')


const app = express();

//Configurando o tipo de dados da conexão
app.use(express.json())

// app.get('/', async (req, res) => {
//     /*
//     Configurando com Client
//     const client = new Client({
//          host: 'localhost',
//          port: '5432',
//          user: 'postgres',
//          password: 'postgres',
//          database: 'aula_conexao_node_pg'
//      });

//      try {
//          await client.connect()
//          const resultado = await client.query('SELECT * FROM empresas WHERE id=1')
//          res.json(resultado.rows)

//          await client.end();
//      }
//      catch (erro) {
//          console.log(erro.message)
//      }*/

//     try {
//         const resultado = await pool.query('SELECT * FROM empresas WHERE id = 2')
//         res.json(resultado.rows)
//     }
//     catch (erro) {
//         console.log(erro.message)
//     }

// })

app.get('/', async (req, res) => {
    const { pagina, porPagina } = req.query
    try {
        const query = "SELECT * FROM pessoas LIMIT $1 OFFSET $2"
        const offset = pagina === 1 ? 0 : (pagina - 1) * porPagina;

        const resultado = await pool.query(query, [porPagina, offset])

        res.json(resultado.rows)
    } catch (error) {
        console.log(erro.message)
    }

})

app.listen(3000)