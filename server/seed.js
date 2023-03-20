const {sauces, items} = require('./seedData.js');

const {sequelize} = require('./db');
const {Sauce} = require('./models');
const {Items} = require('./models/item');//imported item model


const seed = async () => {

    try {
        // drop and recreate tables per model definitions
        await sequelize.sync({ force: true });
    
        // insert data
        await Promise.all(sauces.map(sauce => Sauce.create(sauce)));
        await Promise.all(items.map(items => Items.create(items)));

        console.log("db populated!");
    } catch (error) {
        console.error(error);
    }
}

seed();
