import React, { useState, useEffect } from 'react'
import { ItemUpdate } from './ItemUpdate'
import apiURL from '../../api'

export const Item = (props) => {
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

    async function deleteItem() {
        try {
            let URL = props.userView
                ? `${apiURL}/users/${props.userId}/items/${props.item.id}`
                : `${apiURL}/items/${props.item.id}`
            const response = await fetch(URL, {
                method: 'DELETE',
            })
            const data = await response.json()
            await props.fetchItems()
            props.setSingleView(false)
        } catch (err) {
            console.log('Oh no an error! ', err)
        }
    }

    const ItemExtended = () => {
        const [updating, setUpdating] = useState(false)

        return (
            <>
                {!updating ? (
                    <div className="extend">
                        <div className="item-top-extended">
                            <div className="item-extended">
                                <h3>{props.item.title}</h3>
                                <p>{props.item.category}</p>
                                <p>{props.item.price}</p>
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
                ) : (
                    <ItemUpdate
                        item={props.item}
                        setUpdating={setUpdating}
                        fetchItems={props.fetchItems}
                        fetchSingleItem={fetchSingleItem}
                    />
                )}
            </>
        )
    }

    return (
        <>
            <div className="item">
                {!props.singleView ? (
                    <div className="item-top">
                        <div className="item-mini">
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
                        <img
                            className="item-img"
                            src={props.item.image}
                            alt={props.item.title}
                        />
                        <button
                            onClick={() => {
                                deleteItem()
                            }}
                        >
                            Delete
                        </button>
                    </div>
                ) : null}
                {props.singleView ? (
                    <ItemExtended setSingleView={props.setSingleView} />
                ) : null}
            </div>
        </>
    )
}
