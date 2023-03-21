const { Sequelize } = require('sequelize')
const { sequelize } = require('../db')

const Items = sequelize.define('items', {
    title: { type: Sequelize.STRING, unique: true },
    price: Sequelize.NUMBER,
    description: Sequelize.STRING,
    category: Sequelize.STRING,
    image: Sequelize.STRING,
})

module.exports = { Items }
