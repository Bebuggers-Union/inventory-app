import React, { useState, useEffect } from 'react'
import { ItemContainer } from './Items/ItemContainer'
import { FormsContainer } from './Forms/FormsContainer'

export const App = () => {
    const [singleView, setSingleView] = useState(false)
    const [formType, setFormType] = useState('')

    const toggleForm = (value) => {
        setFormType(value)
    }

    /**
     * We need Collin's fetchItems and Anderson's
     * fetchUsers functions to exist within this
     * scope so we can update it wherever else we
     * post/delete/update from.
     */

    return (
        <main>
            {/* Meant as an example */}
            <div>
                <button onClick={() => toggleForm('user')}>New User</button>
                <button onClick={() => toggleForm('item')}>New Item</button>
                {formType && (
                    <button onClick={() => toggleForm('')}>Hide Form</button>
                )}
            </div>
            <FormsContainer formType={formType} />
            <ItemContainer
                singleView={singleView}
                setSingleView={setSingleView}
            />
        </main>
    )
}
