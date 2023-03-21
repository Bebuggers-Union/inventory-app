import React, { useState, useEffect } from 'react'
import { ItemContainer } from './Items/ItemContainer'
import { FormsContainer } from './Forms/FormsContainer'

export const App = () => {
    const [singleView, setSingleView] = useState(false)
    const [formType, setFormType] = useState('')

    return (
        <main>
            <FormsContainer formType={formType} />
            <ItemContainer
                singleView={singleView}
                setSingleView={setSingleView}
            />
        </main>
    )
}
