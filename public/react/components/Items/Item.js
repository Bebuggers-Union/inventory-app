import React, { useState } from 'react'
import apiURL from '../../api'

export const Item = (props) => {
    const [itemData, setItemData] = useState({})
    const [display, setDisplay] = useState(false)

    console.log(display)

    const singleItemView = async () => {
        props.setItems([props.item])
        const res = await fetch(`${apiURL}/items/${props.item.id}`)
        const data = await res.json()

        setItemData(data)
        setDisplay(true)
    }

    const backButton = async () => {
        props.fetchItems()
        setDisplay(false)
    }

    const ItemExtended = ({ itemData }) => {
        return (
            <>
                <div className="item-extended">
                    <h3 className="item-title">{itemData.title}</h3>
                    <p>{itemData.category}</p>
                    <p>{itemData.price}</p>
                    <img src={itemData.image} alt={itemData.title} />
                    <p className="item-desc">{itemData.description}</p>
                    <button
                        onClick={() => {
                            backButton()
                        }}
                    >
                        Back
                    </button>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="item-mini" hidden={display}>
                <h3
                    onClick={() => {
                        singleItemView()
                    }}
                    className="item-title"
                >
                    {props.item.title}
                </h3>
                <p>{props.item.category}</p>
                <p>{props.item.price}</p>
                <img src={props.item.image} alt={props.item.title} />
            </div>
            {display ? <ItemExtended itemData={itemData} /> : null}
        </>
    )
}
