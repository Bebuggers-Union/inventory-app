import React, { useState, useEffect } from 'react'
import { ItemUpdate } from './ItemUpdate'
import apiURL from '../../api'
import { fireNotification } from '../../../utils/alert'

export const Item = (props) => {
    const [selectedUser, setSelectedUser] = useState(0)

    const singleItemView = async () => {
        await fetchSingleItem()
        props.setSingleView(true)
    }

    async function fetchSingleItem() {
        try {
            const response = await fetch(`${apiURL}/items/${props.item.id}`)
            const itemsData = await response.json()

            props.setSingleItem(itemsData)
        } catch (err) {
            console.log('Oh no an error! ', err)
        }
    }

    async function addToUser(userId) {
        try {
            const response = await fetch(
                `${apiURL}/users/${userId}/items/${props.item.id}`,
                { method: 'PUT' }
            )
            const data = await response.json()
            let currUser = props.users[userId - 1].name
            fireNotification(`Item added to ${currUser}'s list!`)
        } catch (err) {
            console.log('Oh no an error! ', err)
        }
    }

    async function deleteItem() {
        try {
            let URL = props.userView
                ? `${apiURL}/users/${props.userId}/items/${props.item.id}`
                : `${apiURL}/items/${props.item.id}`
            let currUser = props.userView
                ? props.users[props.userId - 1].name
                : null
            let message = props.userView
                ? `Item removed from ${currUser}'s list!`
                : `Item deleted successfully!`
            const response = await fetch(URL, {
                method: 'DELETE',
            })
            const data = await response.json()
            await props.fetchItems()
            props.setSingleView(false)
            fireNotification(message)
        } catch (err) {
            console.log('Oh no an error! ', err)
        }
    }

    const ItemExtended = () => {
        const [updating, setUpdating] = useState(false)

        return (
            <>
                <div className="extended-main container-fluid">
                    <div className="button-div container-fluid">
                        <select
                            name="user-add"
                            value={selectedUser}
                            onChange={(e) => {
                                setSelectedUser(e.target.value)
                            }}
                        >
                            <option>Select a User</option>
                            {props.users.map((user, idx) => {
                                return (
                                    <option key={idx} value={user.id}>
                                        {user.username}
                                    </option>
                                )
                            })}
                        </select>
                        <button
                            onClick={() => {
                                console.log(selectedUser)
                                addToUser(selectedUser)
                            }}
                        >
                            Add to User
                        </button>
                        <button
                            className="back"
                            onClick={() => {
                                props.setSingleView(false)
                            }}
                        >
                            Back
                        </button>
                        <button
                            onClick={() => {
                                setUpdating(true)
                            }}
                        >
                            Update
                        </button>
                        <button
                            onClick={() => {
                                deleteItem()
                            }}
                        >
                            Delete
                        </button>
                    </div>
                    {!updating ? (
                        <div className="extend container-fluid">
                            <div className="item-top-extended container-fluid">
                                <div className="item-extended container-fluid">
                                    <h3>{props.item.title}</h3>
                                    <p>{props.item.category}</p>
                                    <p>${props.item.price}</p>
                                    <p className="item-desc">
                                        {props.item.description}
                                    </p>
                                </div>
                                <img
                                    className="item-img-extended"
                                    src={props.item.image}
                                    alt={props.item.title}
                                />
                            </div>
                        </div>
                    ) : (
                        <ItemUpdate
                            item={props.item}
                            setUpdating={setUpdating}
                            fetchItems={props.fetchItems}
                            fetchSingleItem={fetchSingleItem}
                        />
                    )}
                </div>
            </>
        )
    }

    return (
        <>
            {!props.singleView ? (
                <div className="item-mini container-fluid">
                    <div className="item-top container-fluid">
                        <h3
                            onClick={() => {
                                singleItemView()
                            }}
                            className="item-link"
                        >
                            {props.item.title}
                        </h3>
                        <p>{props.item.category}</p>
                        <p>${props.item.price}</p>
                    </div>
                    <div className="item-bottom container-fluid">
                        <img
                            className="item-img"
                            src={props.item.image}
                            alt={props.item.title}
                        />
                        <button
                            className="delete"
                            onClick={() => {
                                deleteItem()
                            }}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ) : null}
            {props.singleView ? (
                <ItemExtended setSingleView={props.setSingleView} />
            ) : null}
        </>
    )
}
