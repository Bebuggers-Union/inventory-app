import React, { useState } from 'react'
import apiURL from '../../api'
import '../../../../public/style.css'

export const Item = (props) => {
    const singleItemView = async () => {
        await fetchSingleItem()
        props.setSingleView(true)
    }

    async function fetchSingleItem() {
        try {
            const response = await fetch(`${apiURL}/items/${props.item.id}`)
            const itemsData = await response.json()

            props.setSingleItem(itemsData)
        } catch (err) {
            console.log('Oh no an error! ', err)
        }
    }

    const ItemExtended = () => {
        return (
            <>
                <div className="item-extended">
                    <h3 className="item-title">{props.item.title}</h3>
                    <p>{props.item.category}</p>
                    <p>{props.item.price}</p>
                    <img src={props.item.image} alt={props.item.title} />
                    <p className="item-desc">{props.item.description}</p>
                    <button
                        onClick={() => {
                            props.setSingleView(false)
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
            {!props.singleView ? (
                <div className="container-fluid">
                    <div className="item-mini" hidden={display}>
                        <div className="item-top">
                            <h3
                                onClick={() => {
                                    singleItemView()
                                }}
                                className="item-link"
                            >
                                {props.item.title}
                            </h3>
                            <p>{props.item.category}</p>
                            <p>${props.item.price}</p>
                        </div>
                        <img src={props.item.image} alt={props.item.title} />
                    </div>
                </div>
            ) : null}
            {props.singleView ? (
                <ItemExtended setSingleView={props.setSingleView} />
            ) : null}
        </>
    )
}
