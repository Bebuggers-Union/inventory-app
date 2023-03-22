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
                    singleView={props.singleView}
                    setSingleView={props.setSingleView}
                    setSingleItem={setSingleItem}
                    fetchItems={props.fetchItems}
                />
            ) : (
                <>
                    <ItemList
                        items={props.items}
                        singleView={props.singleView}
                        setSingleView={props.setSingleView}
                        setSingleItem={setSingleItem}
                        fetchItems={props.fetchItems}
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
