import React, { useState, useEffect } from 'react'
import { ItemList } from './ItemList'
import { Item } from './Item'
import '../../../style.css'

export const ItemContainer = (props) => {
    const [singleItem, setSingleItem] = useState({})

    const backToInventory = async () => {
        props.setUserView(false)
    }

    return (
        <>
            {props.singleView ? (
                <Item
                    item={singleItem}
                    users={props.users}
                    singleView={props.singleView}
                    setSingleView={props.setSingleView}
                    setSingleItem={setSingleItem}
                    fetchItems={props.fetchItems}
                    userView={props.userView}
                    userId={props.userId}
                />
            ) : (
                <>
                    <ItemList
                        items={props.items}
                        users={props.users}
                        singleView={props.singleView}
                        setSingleView={props.setSingleView}
                        setSingleItem={setSingleItem}
                        fetchItems={props.fetchItems}
                        userView={props.userView}
                        userId={props.userId}
                    />
                    <button
                        onClick={() => {
                            backToInventory()
                        }}
                        hidden={!props.userView}
                    >
                        Back to inventory
                    </button>
                </>
            )}
        </>
    )
}
