import React, { useState } from 'react'
import { NewUserForm } from './NewUserForm'
import { NewItemForm } from './NewItemForm'

import apiURL from '../../api'

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

export const FormsContainer = ({ formType, fetchItems }) => {
    const [userForm, setUserForm] = useState(initialUserState)
    const [itemForm, setItemForm] = useState(initialItemState)
    const [userFormErrors, setUserFormErrors] = useState('')
    const [itemFormErrors, setItemFormErrors] = useState('')
    const [serverErrors, setServerErrors] = useState([])

    const type = formType.toLowerCase()

    /**
     * We probably want to pass in a usersFetch function in here
     * as props, Check with Anderson to see what function we
     * can abstract there and pass here to keep the users list
     * updated on every post, can also pull collin's fetchItems function once ready as well
     */
    const postNewUser = async () => {
        const { name, username, password } = userForm
        if (!name || !username || !password) {
            setUserFormErrors('All fields are required!')
        } else {
            const response = await fetch(`${apiURL}/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userForm),
            })
            const data = await response.json()
            if (data.error) {
                let errors = []
                data.error.map((error) => {
                    errors.push(error.msg)
                })
                setServerErrors([...errors])
            } else {
                // Here we would re-fetch the list of users
                setUserFormErrors('')
                setServerErrors([])
                setUserForm(initialUserState)
            }
        }
    }

    const postNewItem = async () => {
        const { title, price, description, category, image } = itemForm

        if (!title || !price || !description || !category || !image) {
            setItemFormErrors('All fields are required!')
        } else {
            const response = await fetch(`${apiURL}/items`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(itemForm),
            })
            const data = await response.json()
            if (data.error) {
                let errors = []
                data.error.map((error) => {
                    errors.push(error.param)
                })
                setServerErrors([...errors])
            } else {
                // Here we would re-fetch the list of items
                setItemFormErrors('')
                setServerErrors([])
                setItemForm(initialItemState)
                fetchItems()
            }
        }
    }

    const handleUserChange = (e) => {
        const { name, value } = e.target
        setUserForm({ ...userForm, [name]: value })
    }

    const handleUserSubmit = (e) => {
        e.preventDefault()
        postNewUser()
    }

    const handleItemChange = (e) => {
        const { name, value } = e.target
        setItemForm({ ...itemForm, [name]: value })
    }

    const handleItemSubmit = (e) => {
        e.preventDefault()
        postNewItem()
    }

    if (type === 'user') {
        return (
            <NewUserForm
                userForm={userForm}
                handleChange={handleUserChange}
                handleSubmit={handleUserSubmit}
                userFormErrors={userFormErrors}
                serverErrors={serverErrors}
            />
        )
    } else if (type === 'item') {
        return (
            <NewItemForm
                itemForm={itemForm}
                handleChange={handleItemChange}
                handleSubmit={handleItemSubmit}
                itemFormErrors={itemFormErrors}
                serverErrors={serverErrors}
            />
        )
    } else {
        return null
    }
}
