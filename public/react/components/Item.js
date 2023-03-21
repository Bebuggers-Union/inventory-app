import React from 'react'

export const Item = (props) => {
    return (
        <>
            <div className="item">
                <h3 className="item-title">{props.item.title}</h3>
                <p>{props.item.category}</p>
                <p>{props.item.price}</p>
                <img src={props.item.image} alt={props.item.title} />
                <p className="item-desc">{props.item.description}</p>
                <button>Back</button>
            </div>
        </>
    )
}
