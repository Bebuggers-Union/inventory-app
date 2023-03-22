import React, { useState, useEffect } from 'react'
import { ItemContainer } from './Items/ItemContainer'
import { FormsContainer } from './Forms/FormsContainer'
import { FormToggler } from './Forms/FormToggler'

import apiURL from '../api'
import '../../../public/style.css'

export const App = () => {
    const [singleView, setSingleView] = useState(false)
    const [formType, setFormType] = useState('')

    async function fetchItems() {
        try {
            const response = await fetch(`${apiURL}/items`)
            const itemsData = await response.json()

            return itemsData
        } catch (err) {
            console.log('Oh no an error! ', err)
        }
    }

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
     * fetchItems []
     * fetchUsers []
     */

    return (
        <main>
            <div>
                <FormToggler formType={formType} setFormType={setFormType} />
                <FormsContainer formType={formType} />
            </div>
            <ItemContainer
                singleView={singleView}
                setSingleView={setSingleView}
                fetchItems={fetchItems}
            />
        </main>
    )
}
