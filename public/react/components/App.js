import React, { useState, useEffect } from 'react'
import { ItemList } from './ItemList'
import { FormsContainer } from './Forms/FormsContainer'

// import and prepend the api url to any fetch calls
import apiURL from '../api'

export const App = () => {
    const [items, setItems] = useState([])
    const [formType, setFormType] = useState('')

    async function fetchItems() {
        try {
            const response = await fetch(`${apiURL}/items`)
            const itemsData = await response.json()

            setItems(itemsData)
        } catch (err) {
            console.log('Oh no an error! ', err)
        }
    }

    const toggleForm = (value) => {
        setFormType(value)
    }

    useEffect(() => {
        fetchItems()
    }, [])

    return (
        <main>
            {/* We can move these buttons around as well, maybe even make it a component? */}
            <div>
                <button onClick={() => toggleForm('user')}>New User</button>
                <button onClick={() => toggleForm('item')}>New Item</button>
                {formType && (
                    <button onClick={() => toggleForm('')}>Hide Form</button>
                )}
            </div>
            <FormsContainer formType={formType} fetchItems={fetchItems} />
            <ItemList
                items={items}
                setItems={setItems}
                fetchItems={fetchItems}
            />
        </main>
    )
}
