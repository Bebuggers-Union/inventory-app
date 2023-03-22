import React from 'react'

export const Form = ({ children, onSubmit }) => {
    return (
        <form className="form" onSubmit={onSubmit}>
            {children}
        </form>
    )
}
