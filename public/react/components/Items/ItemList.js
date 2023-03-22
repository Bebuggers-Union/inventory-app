import React from 'react'
import { Item } from './Item'
import '../../../../public/style.css'

export const ItemList = (props) => {
    return (
        <>
            <div className="items-list container-fluid">
                <h2>
                    {props.userView
                        ? `${props.users[props.userId - 1].name}'s `
                        : null}
                    Items
                </h2>
                {props.items.map((item, idx) => {
                    return (
                        <Item
                            item={item}
                            users={props.users}
                            key={idx}
                            singleView={props.singleView}
                            setSingleView={props.setSingleView}
                            setSingleItem={props.setSingleItem}
                            fetchItems={props.fetchItems}
                            userView={props.userView}
                            userId={props.userId}
                        />
                    )
                })}
            </div>
        </>
    )
}
