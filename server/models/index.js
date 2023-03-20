const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

const Sauce = sequelize.define("sauces", {
  name: Sequelize.STRING,
  image: Sequelize.STRING,
});

const Items = sequelize.define("items", {
  title:Sequelize.STRING,
  price:Sequelize.NUMBER,
  description:Sequelize.STRING,
  category:Sequelize.STRING,
  image:Sequelize.STRING
});

module.exports = {
  db: sequelize,
  Sauce, Items
};
