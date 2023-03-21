import React from 'react'

export const Item = (props) => {
    return (
        <>
            <div className="item">
                <h3 className="item-title">{props.item.name}</h3>
                <p>{props.item.category}</p>
                <button>Back</button>
                <img src={props.item.image} alt={props.item.name} />
                <p className="item-desc">{props.item.description}</p>
            </div>
        </>
    )
}
