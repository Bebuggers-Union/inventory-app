import React from 'react'
import { Item } from './Item'

export const ItemList = (props) => {
    return (
        <>
            <div className="items-list">
                {props.items.map((item, idx) => {
                    return (
                        <Item
                            item={item}
                            key={idx}
                            singleView={props.singleView}
                            setSingleView={props.setSingleView}
                            setSingleItem={props.setSingleItem}
                        />
                    )
                })}
            </div>
        </>
    )
}
