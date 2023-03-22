import React, { useState, useEffect } from 'react'
import { ItemContainer } from './Items/ItemContainer'
import { FormsContainer } from './Forms/FormsContainer'
import { FormToggler } from './Forms/FormToggler'

export const App = () => {
    const [singleView, setSingleView] = useState(false)
    const [formType, setFormType] = useState('')

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
            />
        </main>
    )
}
