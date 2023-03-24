import React from 'react'
import { Container } from '../Containers/Container'
import { Form } from './Form'
import { FormBox } from './FormBox'
import { SubmitButton } from '../Buttons/SubmitButton'

export const NewUserForm = ({
    userForm,
    handleChange,
    handleSubmit,
    userFormErrors,
    serverErrors,
}) => {
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <h3>Create New User</h3>
                {userFormErrors && <div>{userFormErrors}</div>}
                {serverErrors.length > 0
                    ? serverErrors.map((err, idx) => <div key={idx}>{err}</div>)
                    : null}
                <FormBox>
                    <div className="new-user containter-fluid">
                        <label htmlFor="new-user-name-form">Name: </label>
                        <input
                            type="text"
                            id="new-user-name-form"
                            name="name"
                            placeholder="Mickey Mouse"
                            value={userForm.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="new-user-username-form">
                            Username:{' '}
                        </label>
                        <input
                            type="text"
                            id="new-user-username-form"
                            name="username"
                            placeholder="DisneysMouse"
                            value={userForm.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="new-user-password-form">
                            Password:{' '}
                        </label>
                        <input
                            type="text"
                            id="new-user-password-form"
                            name="password"
                            placeholder="iloveMinnie123"
                            value={userForm.password}
                            onChange={handleChange}
                        />
                    </div>
                </FormBox>
                <SubmitButton>Submit</SubmitButton>
            </Form>
        </Container>
    )
}
