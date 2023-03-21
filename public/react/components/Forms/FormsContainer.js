import React, { useState } from 'react'
import { NewUserForm } from './NewUserForm'
import { NewItemForm } from './NewItemForm'

const initialUserState = {
    name: '',
    username: '',
    password: '',
}

const initialItemState = {
    title: '',
    price: '',
    description: '',
    category: '',
    image: '',
}

export const FormsContainer = ({ formType }) => {
    const [userForm, setUserForm] = useState(initialUserState)
    const [itemForm, setItemForm] = useState(initialItemState)

    const type = formType.toLowerCase()

    if (type === 'user') {
        return <NewUserForm />
    } else if (type === 'item') {
        return <NewItemForm />
    } else {
        return null
    }
}
