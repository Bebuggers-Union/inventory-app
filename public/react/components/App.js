import React, { useState, useEffect } from 'react'
import { ItemContainer } from './Items/ItemContainer'
import { FormsContainer } from './Forms/FormsContainer'
import { UserList } from './UsersList' //added
import { FormToggler } from './Forms/FormToggler'
import '../../../public/style.css'

import apiURL from '../api'

export const App = () => {
    const [search, setSearch] = useState('')
    const [searching, setSearching] = useState(false)
    const [singleView, setSingleView] = useState(false)
    const [userId, setUserId] = useState(0)
    const [userView, setUserView] = useState(false)
    const [formType, setFormType] = useState('')
    const [users, setUsers] = useState([])
    const [items, setItems] = useState([])

    const searchResult = async () => {
        let URL = userView
            ? `${apiURL}/users/${userId}/items/search/${search}`
            : `${apiURL}/items/search/${search}`

        const response = await fetch(URL)
        const itemsData = await response.json()
        setItems(itemsData)
        setSingleView(false)
        setSearching(true)
    }

    async function fetchItems() {
        try {
            let URL = userView
                ? `${apiURL}/users/${userId}/items`
                : `${apiURL}/items`
            const response = await fetch(URL)
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
        fetchItems(), fetchUsers()
    }, [userView, userId])

    return (
        <main>
            <header>
                <div className="logo">
                    <h1>Inventory App</h1>
                    <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSaurQ1EbLkPAKv_pDjPvqxZNJHxqURLuh-6ovORtKkOTjOQd-CSBkfRqC3jkRafDkF_9oE8vQvlHU&usqp=CAc"></img>
                </div>
                <input
                    className="search"
                    type="text"
                    aria-label="search"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value)
                    }}
                />
                <button
                    onClick={() => {
                        searchResult()
                    }}
                    disabled={search.length < 1}
                >
                    Search
                </button>
            </header>
            <div className="forms-container">
                <FormToggler formType={formType} setFormType={setFormType} />
                <FormsContainer
                    formType={formType}
                    fetchItems={fetchItems}
                    fetchUsers={fetchUsers}
                />
            </div>
            <div className="site-block">
                <div className="users">
                    <h2 className="component-title-users">Users</h2>
                    <UserList
                        users={users}
                        setUserView={setUserView}
                        userView={userView}
                        setUserId={setUserId}
                        singleView={singleView}
                        setSingleView={setSingleView}
                    />
                </div>
                <ItemContainer
                    items={items}
                    users={users}
                    singleView={singleView}
                    setSingleView={setSingleView}
                    fetchItems={fetchItems}
                    userView={userView}
                    setUserView={setUserView}
                    userId={userId}
                    search={search}
                    setSearch={setSearch}
                    setSearching={setSearching}
                    searching={searching}
                />
            </div>
        </main>
    )
}
