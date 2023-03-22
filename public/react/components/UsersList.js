import React from 'react'
import { User } from './Users'

export const UserList = ({ users, setUserId, setUserView }) => {
    return (
        <div className="usersNav">
            {users.map((user, idx) => {
                return (
                    <User
                        user={user}
                        key={idx}
                        setUserId={setUserId}
                        setUserView={setUserView}
                    />
                )
            })}
        </div>
    )
}
