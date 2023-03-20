const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
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

module.exports = router
