import React, { useState, useEffect } from 'react'
import { ItemList } from './ItemList'

// import and prepend the api url to any fetch calls
import apiURL from '../api'

export const App = () => {
    const [items, setItems] = useState([])

    async function fetchItems() {
        try {
            const response = await fetch(`${apiURL}/items`)
            const itemsData = await response.json()
            console.log(itemsData)

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
            <ItemList items={items} />
        </main>
    )
}
