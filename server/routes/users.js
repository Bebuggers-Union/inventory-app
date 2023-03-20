const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const { User } = require('../models/User')

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

        if (!errors.isEmpty()) return res.json({ error: errors.array() })

        try {
            const users = await User.create({
                name: req.body.name,
                username: req.body.username,
                password: req.body.password,
            })

            return res.json(users)
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

module.exports = router
