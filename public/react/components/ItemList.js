import React from 'react'
import { Item } from './Item'
import '../../style.css'

export const ItemList = ({ items, setItems, fetchItems }) => {
    return (
        <>
            {items.map((item, idx) => {
                return (
                    <Item
                        item={item}
                        setItems={setItems}
                        fetchItems={fetchItems}
                        key={idx}
                    />
                )
            })}
        </>
    )
}
