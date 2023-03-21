import React, { useState } from 'react'
import { NewUserForm } from './NewUserForm'
import { NewItemForm } from './NewItemForm'

export const FormsContainer = ({ formType }) => {
    if (formType === '') {
        return null
    }
    return <div>{type === 'user' ? <NewUserForm /> : <NewItemForm />}</div>
}
