const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const { User } = require('../models/User')
const { Items } = require('../models/item')

//GET all users

router.get('/', async (req, res, next) => {
    try {
        const users = await User.findAll()
        return res.json(users)
    } catch (error) {
        next(error)
    }
})

//GET single user

router.get('/:id', async (req, res, next) => {
    try {
        const user = await User.findByPk(req.params.id)

        if (!user) return res.json({ error: 'user not found' }, 500)

        return res.json(user)
    } catch (error) {
        next(error)
    }
})

//POST new user

router.post(
    '/',
    [
        check('name').notEmpty().trim().isLength({ min: 2, max: 20 }),
        check('username').notEmpty().trim().isLength({ min: 2, max: 20 }),
        check('password').notEmpty().trim().isLength({ min: 6, max: 20 }),
    ],
    async (req, res, next) => {
        const errors = validationResult(req)

        if (!errors.isEmpty()) return res.json({ error: errors.array() }, 500)

        try {
            const user = await User.create({
                name: req.body.name,
                username: req.body.username,
                password: req.body.password,
            })

            return res.json(user, 201)
        } catch (error) {
            next(error)
        }
    }
)

//DELETE single user

router.delete('/:id', async (req, res, next) => {
    try {
        const user = await User.findByPk(req.params.id)
        await user.destroy()
        res.json({ deleted: user })
    } catch (error) {
        next(error)
    }
})

//GET single user's items

router.get('/:id/items', async (req, res, next) => {
    try {
        const user = await User.findByPk(req.params.id, { include: Items })
        return res.json(user)
    } catch (error) {
        next(error)
    }
})

//PUT single user's items

router.put('/:id/items/:itemid', async (req, res, next) => {
    try {
        let user = await User.findByPk(req.params.id)
        const item = await Items.findByPk(req.params.itemid)

        if (!user) return res.json({ error: 'user not found' }, 500)
        if (!item) return res.json({ error: 'item not found' }, 500)

        await user.addItems(req.params.itemid)

        return res.json({ added: item })
    } catch (error) {
        next(error)
    }
})

module.exports = router
