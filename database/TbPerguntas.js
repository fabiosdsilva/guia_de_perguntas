const Sequelize = require('sequelize')
const connection = require('./dbConfig')

const TbRespostas = require('./TbRespostas')

const TbPerguntas = connection.define('tbperguntas', {
    titulo:{
        type: Sequelize.STRING
    },
    pergunta:{
        type: Sequelize.TEXT
    }
})

TbPerguntas.hasMany(TbRespostas)
TbRespostas.belongsTo(TbPerguntas)



module.exports = TbPerguntas