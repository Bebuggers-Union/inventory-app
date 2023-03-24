import React from 'react'
import { Button } from '../Buttons/Button'

export const FormToggler = ({ setFormType, formType }) => {
    const toggleForm = (value) => {
        setFormType(value)
    }
    return (
        <div className="form-toggler container-fluid">
            {/* Meant as an example */}
            <Button onClick={() => toggleForm('user')}>New User</Button>
            <Button onClick={() => toggleForm('item')}>New Item</Button>
            {formType && (
                <Button onClick={() => toggleForm('')}>Close form</Button>
            )}
        </div>
    )
}
