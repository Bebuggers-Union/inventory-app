const { items, users } = require('./seedData.js')

const { sequelize } = require('./db')

const { Items } = require('./models/item') //imported item model
const { User } = require('./models/User')

const seed = async () => {
    try {
        // drop and recreate tables per model definitions
        await sequelize.sync({ force: true })

        // insert data
        await Promise.all(items.map((items) => Items.create(items)))
        await Promise.all(users.map((users) => User.create(users)))

        console.log('db populated!')
    } catch (error) {
        console.error(error)
    }
}

seed()
