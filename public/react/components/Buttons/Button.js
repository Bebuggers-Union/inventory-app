import React from 'react'

export const Button = ({ children, onClick }) => {
    return (
        <button className={`btn`} onClick={onClick || null}>
            {children}
        </button>
    )
}
