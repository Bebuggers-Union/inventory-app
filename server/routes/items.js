const express = require('express')
const router = express.Router()
//Import Items table
const { Items } = require('../models/item')
const { User } = require('../models/User')

router.use(express.json())
router.use(express.urlencoded({ extended: true }))

//GET / items
router.get('/', async (request, response) => {
    try {
        const items = await Items.findAll() //gets all items
        response.send(items)
    } catch (error) {
        console.log(error)
    }
})

//GET one individual item
router.get('/:id', async (request, response) => {
    try {
        const oneItem = await Items.findByPk(request.params.id)
        response.json(oneItem)
    } catch (error) {
        console.log(error)
    }
})

//POST one item
router.post('/:id/add/item', async (request, response) => {
    try {
        const id = request.params.id
        const user = await User.findByPk(id) //gets specific user
        const item = request.body
        const items = await Items.findByPk(item) // gets specific item
        user.addItem(items)
        response.send(`${item} added to ${user}`)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router
