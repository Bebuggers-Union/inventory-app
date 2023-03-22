import React from 'react'

export const FormToggler = ({ setFormType, formType }) => {
    const toggleForm = (value) => {
        setFormType(value)
    }
    return (
        <div className="form-toggler">
            {/* Meant as an example */}
            <button onClick={() => toggleForm('user')}>New User</button>
            <button onClick={() => toggleForm('item')}>New Item</button>
            {formType && (
                <button onClick={() => toggleForm('')}>Hide Form</button>
            )}
        </div>
    )
}
