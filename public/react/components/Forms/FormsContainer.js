import React, { useState } from 'react'
import { NewUserForm } from './NewUserForm'
import { NewItemForm } from './NewItemForm'

export const FormsContainer = ({ formType }) => {
    const type = formType.toLowerCase()

    if (type === '') {
        return null
    } else if (type === 'user') {
        return <NewUserForm />
    } else if (type === 'item') {
        return <NewItemForm />
    }
}
