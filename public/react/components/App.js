import React, { useState, useEffect } from 'react'
import { ItemList } from './ItemList'
import { FormsContainer } from './Forms/FormsContainer'
import { UserList } from './UsersList' //added

// import and prepend the api url to any fetch calls
import apiURL from '../api'

export const App = () => {
    const [items, setItems] = useState([])
    const [formType, setFormType] = useState('')
    const[users, setUsers] = useState([])

    async function fetchItems() {
        try {
            const response = await fetch(`${apiURL}/items`)
            const itemsData = await response.json()

            setItems(itemsData)
        } catch (err) {
            console.log('Oh no an error! ', err)
        }
    }
    async function fetchUsers() {
        try {
            const response = await fetch(`${apiURL}/users`)
            const userData = await response.json()


            setUsers(userData)
               
        } catch (err) {
            console.log('Oh no an error! ', err)
        }
    }

    useEffect(() => {
        fetchItems(),
        fetchUsers()
    }, [])


    return (
        <main>
            <h2>Users</h2>
            <UserList users={users}/>
            <FormsContainer formType={formType} />
            <ItemList
                items={items}
                setItems={setItems}
                fetchItems={fetchItems}
            />
           
        </main>
    )
}
