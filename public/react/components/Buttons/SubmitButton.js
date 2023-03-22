import React from 'react'

export const SubmitButton = ({ children, onClick }) => {
    return (
        <button
            type="submit"
            className={`btn btn-submit`}
            onClick={onClick || null}
        >
            {children}
        </button>
    )
}
