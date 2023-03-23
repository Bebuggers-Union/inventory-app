import React, { useState, useEffect } from 'react'
import { ItemList } from './ItemList'
import { Item } from './Item'
import '../../../style.css'

export const ItemContainer = (props) => {
    const [singleItem, setSingleItem] = useState({})

    const backToInventory = async () => {
        props.setUserView(false)
    }

    const undoSearch = async () => {
        props.setSearch('')
        props.setSearching(false)
        props.fetchItems()
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
                    <div className="item-div container-fluid">
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
                                undoSearch()
                            }}
                            hidden={!props.searching}
                        >
                            Finish search
                        </button>
                        <button
                            onClick={() => {
                                backToInventory()
                            }}
                            hidden={!props.userView}
                        >
                            Back to inventory
                        </button>
                    </div>
                </>
            )}
        </>
    )
}
