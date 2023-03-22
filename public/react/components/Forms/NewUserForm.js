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
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        value={userForm.name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Username
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter Username"
                        value={userForm.username}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Password
                    <input
                        type="text"
                        name="password"
                        placeholder="Enter Password"
                        value={userForm.password}
                        onChange={handleChange}
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}
