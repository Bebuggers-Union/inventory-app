const { Sequelize } = require('sequelize')
const { sequelize } = require('../db')

const User = sequelize.define('users', {
    name: Sequelize.STRING,
    username: { type: Sequelize.STRING, unique: true },
    password: Sequelize.STRING,
})

module.exports = { User }
