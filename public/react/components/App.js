import React, { useState, useEffect } from 'react'
import { ItemContainer } from './Items/ItemContainer'
import { FormsContainer } from './Forms/FormsContainer'
import { FormToggler } from './Forms/FormToggler'
import '../../../public/style.css'

import apiURL from '../api'

export const App = () => {
    const [singleView, setSingleView] = useState(false)
    const [formType, setFormType] = useState('')
    const [items, setItems] = useState([])

    async function fetchItems() {
        try {
            const response = await fetch(`${apiURL}/items`)
            const itemsData = await response.json()

            setItems(itemsData)
        } catch (err) {
            console.log('Oh no an error! ', err)
        }
    }

    useEffect(() => {
        fetchItems()
    }, [])

    /**
     * We need Collin's fetchItems and Anderson's
     * fetchUsers functions to exist within this
     * scope so we can update it wherever else we
     * post/delete/update from.
     *
     * For example, I want to call fetchItems when I
     * post a new item so the list is always updated
     * (same for when I create new users)
     *
     * Feel free to mark an X in the brackets below when
     * it's been added, last person if you can please remove
     * this comment, thanks~
     *
     * fetchItems [X]
     * fetchUsers []
     */

    return (
        <main>
            <div>
                <FormToggler formType={formType} setFormType={setFormType} />
                <FormsContainer formType={formType} fetchItems={fetchItems} />
            </div>
            <ItemContainer
                items={items}
                singleView={singleView}
                setSingleView={setSingleView}
                fetchItems={fetchItems}
            />
        </main>
    )
}
