import React, { useState } from 'react'
import apiURL from '../../api'

export const ItemUpdate = ({
    item,
    setUpdating,
    fetchItems,
    fetchSingleItem,
}) => {
    const initialItemState = {
        title: item.title,
        price: item.price,
        description: item.description,
        category: item.category,
        image: item.image,
    }

    const [itemForm, setItemForm] = useState(initialItemState)

    const putItem = async () => {
        try {
            const response = await fetch(`${apiURL}/items/${item.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(itemForm),
            })
            const data = await response.json()
        } catch (err) {
            console.log(err)
        }
    }

    const handleItemSubmit = async (e) => {
        e.preventDefault()
        console.log('submit')
        await fetchItems()
        await fetchSingleItem()
        setUpdating(false)
    }

    const handleItemChange = (e) => {
        const { name, value } = e.target
        setItemForm({ ...itemForm, [name]: value })
    }

    return (
        <>
            <div className="extend">
                <form className="item-update-form" onSubmit={handleItemSubmit}>
                    <div className="item-top-extended">
                        <div className="item-extended">
                            <p>
                                Title:
                                <input
                                    type="text"
                                    name="title"
                                    placeholder={item.title}
                                    value={itemForm.title}
                                    onChange={handleItemChange}
                                />
                            </p>
                            <p>
                                Category:
                                <input
                                    type="text"
                                    name="category"
                                    placeholder={item.category}
                                    value={itemForm.category}
                                    onChange={handleItemChange}
                                />
                            </p>
                            <p>
                                Price:
                                <input
                                    type="text"
                                    name="price"
                                    placeholder={item.price}
                                    value={itemForm.price}
                                    onChange={handleItemChange}
                                />
                            </p>
                            <p className="item-desc">
                                Description:
                                <input
                                    type="text"
                                    name="description"
                                    placeholder={item.description}
                                    value={itemForm.description}
                                    onChange={handleItemChange}
                                />
                            </p>
                        </div>
                        <p>
                            Image URL:
                            <input
                                type="text"
                                name="image"
                                placeholder={item.image}
                                value={itemForm.image}
                                onChange={handleItemChange}
                            />
                        </p>
                    </div>
                    <button
                        className="back"
                        onClick={() => {
                            setUpdating(false)
                        }}
                    >
                        Back
                    </button>
                    <button
                        type="submit"
                        onClick={() => {
                            putItem()
                        }}
                    >
                        Confirm
                    </button>
                </form>
            </div>
        </>
    )
}
