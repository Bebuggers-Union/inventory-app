import 'regenerator-runtime/runtime'
const { Items } = require('../server/models/item')
const app = require('../server/app')
const fetch = require('node-fetch')

const apiURL = 'http://localhost:3000/api'

//Ensure the server is running and seeded prior to testing

describe('Item Routes', () => {
    test('can GET all items', async () => {
        const response = await fetch(`${apiURL}/items`)
        const data = await response.json()

        const dbItems = await Items.findAll()

        // uses direct db pull to verify

        expect(data.length).toEqual(dbItems.length)
    })

    test('can GET a single Item', async () => {
        const response = await fetch(`${apiURL}/items/1`)
        const data = await response.json()

        const dbItem = await Items.findByPk(1)

        expect(data.title).toEqual(dbItem.title)

        const badResponse = await fetch(`${apiURL}/items/10000`)
        expect(badResponse.status).toEqual(500)
    })

    test('can POST and DELETE an item', async () => {
        const itemForm = {
            title: 'Black Polo Shirt',
            price: 60,
            description: 'Size medium black polo shirt',
            category: 'mens clothing',
            image: 'www.blackpolo.com',
        }
        const response = await fetch(`${apiURL}/items`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(itemForm),
        })

        const data = await response.json()

        expect(data.title).toEqual(itemForm.title)

        const deleteResponse = await fetch(`${apiURL}/items/${data.id}`, {
            method: 'DELETE',
        })

        expect(deleteResponse.status).toEqual(200)
    })
})
