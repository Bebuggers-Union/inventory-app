import React, { useState, useEffect } from 'react'
import { ItemList } from './ItemList'
import { Item } from './Item'
import '../../../style.css'

export const ItemContainer = (props) => {
    const [items, setItems] = useState([])
    const [singleItem, setSingleItem] = useState({})

    const itemHandler = async () => {
        const fetchedItems = await props.fetchItems()
        setItems(fetchedItems)
    }

    useEffect(() => {
        itemHandler()
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
