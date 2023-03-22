import React from 'react'
import { User } from './Users'

export const UserList = ({
    users,
    setUserId,
    setUserView,
    userView,
    singleView,
    setSingleView,
}) => {
    return (
        <div className="usersNav">
            {users.map((user, idx) => {
                return (
                    <User
                        user={user}
                        key={idx}
                        setUserId={setUserId}
                        setUserView={setUserView}
                        userView={userView}
                        singleView={singleView}
                        setSingleView={setSingleView}
                    />
                )
            })}
        </div>
    )
}
