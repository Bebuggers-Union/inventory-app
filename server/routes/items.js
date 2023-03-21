const express = require('express')
const router = express.Router()
const {check, validationResult} = require("express-validator")
const { response } = require('../app')
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

//POST one item/add item to user
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

//POST. Add item to table
router.post("/new_item",async(request, response)=>{
    try{
        const newItem = request.body
        await Items.create({
            title: newItem.title,
            price: newItem.price,
            description: newItem.description,
            category: newItem.category,
            image: newItem.image,
        })
        response.json("Successfully added item")
    }catch(error){
        console.log(error)
    }
})
//PUT Method. update item
router.put("/:id", async(request, response)=>{
    try{
        const primaryKey = request.params.id
        const updatedInfo = request.body
        await Items.update({
            title: updatedInfo.title,
            price: updatedInfo.price,
            description: updatedInfo.description,
            category: updatedInfo.category,
            image: updatedInfo.image,
        }, {
            where: {id: primaryKey}
        })
    }catch(error){
        console.log(error)
    }
})


//DELETE item
router.delete("/:id", async(request, response)=>{
    const primaryKey = request.params.id
    await Items.destroy({
        where: {id : primaryKey}
    })
    response.json("Delete item")
})

module.exports = router
