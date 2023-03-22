import React from 'react'
import { User } from './Users'


export const UserList = ({users}) => {
    return (
        <div className='usersNav'>
            {users.map((user, idx) => {
                return (
                    <User
                        user={user}
                        key={idx}
                    />
                )
            })}
        </div>
    )
}
