import React, { useState, useEffect } from 'react'
import { ItemList } from './ItemList'
import { Item } from './Item'

import apiURL from '../../api'

export const ItemContainer = (props) => {
    const [items, setItems] = useState([])
    const [singleItem, setSingleItem] = useState({})

    async function fetchItems() {
        try {
            const response = await fetch(`${apiURL}/items`)
            const itemsData = await response.json()

            setItems(itemsData)
        } catch (err) {
            console.log('Oh no an error! ', err)
        }
    }

    useEffect(() => {
        props.singleView ? fetchSingleItem() : fetchItems()
    }, [])

    return (
        <>
            {props.singleView ? (
                <Item
                    item={singleItem}
                    singleView={props.singleView}
                    setSingleView={props.setSingleView}
                    setSingleItem={setSingleItem}
                />
            ) : (
                <ItemList
                    items={items}
                    singleView={props.singleView}
                    setSingleView={props.setSingleView}
                    setSingleItem={setSingleItem}
                />
            )}
        </>
    )
}
