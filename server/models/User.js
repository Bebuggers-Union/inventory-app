const {Sequelize} = require('sequelize');
const {sequelize} = require('../db');

const User = sequelize.define("users", {
    name: Sequelize.STRING,
    username: Sequelize.STRING,
    password: Sequelize.STRING
  });

module.exports = {User}