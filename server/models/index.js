const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')
const {Items} = require('./item')
const {User} = require('./User')

const Sauce = sequelize.define("sauces", {
  name: Sequelize.STRING,
  image: Sequelize.STRING,
});

User.belongsToMany(Items, {through: 'user_items'});
Items.belongsToMany(User, {through: 'user_items'});


module.exports = {
  db: sequelize,
  Sauce
};
