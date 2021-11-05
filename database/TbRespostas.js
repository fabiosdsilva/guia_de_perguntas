const Sequelize = require('sequelize')
const connection = require('./dbConfig')


const TbRespostas = connection.define('tbrespostas', {
    respostas: {
        type: Sequelize.STRING
    }
})

module.exports = TbRespostas