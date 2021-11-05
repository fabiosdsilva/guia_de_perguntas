const express = require('express')
const app = express()

const connection = require('./database/dbConfig')

const TbPerguntas = require('./database/TbPerguntas')
const TbRespostas = require('./database/TbRespostas')

//Conectando com o banco de dados
connection.authenticate().then(() => {
    console.log('A conexção foi estabelecida com o banco de dados');
}).catch((erro) => {
    console.log("Não foi possível conectar com o banco de dados. Erro: "+erro);
})

//Exibindo html
app.set('view engine', 'ejs')
app.use(express.static('public'))

//Utilizando o body-Parser
app.use(express.urlencoded({extended: true}))

//Rotas
app.get('/', (req, res) => {
    //Aqui estou listando o conteudo que tem na minha tabela
    TbPerguntas.findAll({ raw: true, order: [['id','DESC']] }).then(perguntas => {
        res.render('home',{
            //Criei uma varial perguntas para a página home
            perguntas: perguntas
        })
    })
    
})

app.get('/perguntar', (req, res) => {
    res.render('perguntar')
})

app.post('/perguntar', (req, res) => {
    var titulo = req.body.titulo
    var pergunta = req.body.pergunta
    TbPerguntas.create({
        titulo: titulo,
        pergunta: pergunta
    })
    res.redirect('/')
})

app.get('/pergunta/:id', (req, res) => {
    var id = req.params.id
    TbPerguntas.findOne({
        where: {id: id}
    }).then(pergunta => {
        if(pergunta != undefined){
            res.render('pergunta', {
                pergunta: pergunta
            })
        }else{
            res.render('404')
        }
    })
})

app.post('/responder', (req, res) => {
    var idPergunta = req.body.idPergunta
    var resposta = req.body.texto_resposta
    TbRespostas.create({
        resposta: resposta
    })
})


//Outras coisas
app.listen(8083, () => {
    console.log('o servidor está rodando na porta 8083');
})
