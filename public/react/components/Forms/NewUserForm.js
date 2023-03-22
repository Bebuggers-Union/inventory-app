import React from 'react'

export const NewUserForm = ({
    userForm,
    handleChange,
    handleSubmit,
    userFormErrors,
    serverErrors,
}) => {
    return (
        <div>
            {userFormErrors && <div>{userFormErrors}</div>}
            {serverErrors.length > 0
                ? serverErrors.map((err, idx) => <div key={idx}>{err}</div>)
                : null}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={userForm.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="username"
                    placeholder="Enter Username"
                    value={userForm.username}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="password"
                    placeholder="Enter Password"
                    value={userForm.password}
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}
