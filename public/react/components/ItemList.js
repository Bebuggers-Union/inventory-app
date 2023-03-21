import React from 'react'
import { Item } from './Item'

export const ItemList = ({ items }) => {
    return (
        <>
            {items.map((item, idx) => {
                return <Item item={item} key={idx} />
            })}
        </>
    )
}