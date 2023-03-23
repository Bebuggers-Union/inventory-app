import 'regenerator-runtime/runtime'
const { User } = require('../server/models/User')
const app = require('../server/app')
const fetch = require('node-fetch')

const apiURL = 'http://localhost:3000/api'

//Ensure the server is running and seeded prior to testing

describe('User Routes', () => {
    test('can GET all users', async () => {
        const response = await fetch(`${apiURL}/users`)
        const data = await response.json()

        const dbUsers = await User.findAll()

        // uses direct db pull to verify

        expect(data.length).toEqual(dbUsers.length)
        expect(response.status).toEqual(200)
    })

    test('can GET a single user', async () => {
        const response = await fetch(`${apiURL}/users/1`)
        const data = await response.json()

        const dbUsers = await User.findByPk(1)

        expect(data.name).toEqual(dbUsers.name)
        expect(response.status).toEqual(200)

        const badResponse = await fetch(`${apiURL}/users/10000`)
        expect(badResponse.status).toEqual(500)
    })

    test('can POST and DELETE a user', async () => {
        const userForm = {
            username: 'testuser123',
            name: 'Test User',
            password: 'password123',
        }
        const response = await fetch(`${apiURL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userForm),
        })
        const data = await response.json()

        expect(data.name).toEqual(userForm.name)
        expect(response.status).toEqual(201)

        const badResponse = await fetch(`${apiURL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: 'Bad User' }),
        })

        expect(badResponse.status).toEqual(500)

        const deleteResponse = await fetch(`${apiURL}/users/${data.id}`, {
            method: 'DELETE',
        })

        expect(deleteResponse.status).toEqual(200)
    })

    test('can PUT update user information', async () => {
        const user = await User.findByPk(1)

        const testName = user.name == 'New Name' ? 'Newer Name' : 'New Name'

        const response = await fetch(`${apiURL}/users/1`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: testName }),
        })

        const data = await response.json()

        expect(data.name).not.toEqual(user.name)
        expect(response.status).toEqual(200)

        const badResponse = await fetch(`${apiURL}/users/1`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: 'a' }),
        })

        expect(badResponse.status).toEqual(500)
    })

    test('can PUT items to user', async () => {
        const response = await fetch(`${apiURL}/users/1/items/1`, {
            method: 'PUT',
        })

        expect(response.status).toEqual(200)

        const badItemResponse = await fetch(`${apiURL}/users/1/items/1000`, {
            method: 'PUT',
        })

        const badUserResponse = await fetch(`${apiURL}/users/1000/items/1`, {
            method: 'PUT',
        })

        expect(badItemResponse.status).toEqual(500)
        expect(badUserResponse.status).toEqual(500)
    })

    test('can GET items from user', async () => {
        const response = await fetch(`${apiURL}/users/1/items`)
        const data = await response.json()

        expect(data.length).toEqual(1)
        expect(response.status).toEqual(200)

        const badResponse = await fetch(`${apiURL}/users/1000/items`)

        expect(badResponse.status).toEqual(500)
    })

    test('can GET items from user based on search term', async () => {
        const response = await fetch(`${apiURL}/users/1/items/search/men`)
        const data = await response.json()

        const badSearch = await fetch(
            `${apiURL}/users/1/items/search/asdfasdhfaiuwe`
        )
        const badData = await badSearch.json()

        // previously added item is in the "men's clothing" category
        expect(data.length).toEqual(1)
        expect(response.status).toEqual(200)

        expect(badData.length).toEqual(0)
        expect(badSearch.status).toEqual(200)
    })

    test('can DELETE item from user', async () => {
        const response = await fetch(`${apiURL}/users/1/items/1`, {
            method: 'DELETE',
        })

        expect(response.status).toEqual(200)

        const badItemResponse = await fetch(`${apiURL}/users/1/items/1000`, {
            method: 'DELETE',
        })

        const badUserResponse = await fetch(`${apiURL}/users/1000/items/1`, {
            method: 'DELETE',
        })

        expect(badItemResponse.status).toEqual(500)
        expect(badUserResponse.status).toEqual(500)
    })
})
