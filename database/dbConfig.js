const Sequelize = require('sequelize')
const connection = new Sequelize('guiaprodgramador', 'root', '1234',{
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
})

module.exports = connection