const Sequelize = require('sequelize')
const connection = require('./dbConfig')


const TbRespostas = connection.define('tbrespostas', {
    respostas: {
        type: Sequelize.TEXT
    },
    idPerguntas: {
        type: Sequelize.INTEGER
    }
    
})

TbRespostas.sync({force: false})

module.exports = TbRespostas