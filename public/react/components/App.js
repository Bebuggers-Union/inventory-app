import React, { useState, useEffect } from 'react'
import { ItemList } from './ItemList'

// import and prepend the api url to any fetch calls
import apiURL from '../api'

export const App = () => {
    const [items, setItems] = useState([])

    async function fetchItems() {
        try {
            const response = await fetch(`${apiURL}/sauces`)
            const itemsData = await response.json()

            setItems(itemsData)
        } catch (err) {
            console.log('Oh no an error! ', err)
        }
    }

    useEffect(() => {
        fetchItems()
    }, [])

    return (
        <main>
            <h1>Sauce Store</h1>
            <h2>All things 🔥</h2>
            <ItemList items={items} />
        </main>
    )
}
