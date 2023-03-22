import React from 'react'
import { SubmitButton } from '../Buttons/SubmitButton'

export const NewItemForm = ({
    itemForm,
    handleChange,
    handleSubmit,
    itemFormErrors,
    serverErrors,
}) => {
    return (
        <div>
            {itemFormErrors && <div>{itemFormErrors}</div>}
            {serverErrors.length > 0 ? (
                <div>Please enter all fields</div>
            ) : null}
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter Title"
                        value={itemForm.title}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Price:
                    <input
                        type="text"
                        name="price"
                        placeholder="Enter Price"
                        value={itemForm.price}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Description:
                    <input
                        type="text"
                        name="description"
                        placeholder="Enter Description"
                        value={itemForm.description}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Category:
                    <input
                        type="text"
                        name="category"
                        placeholder="Enter Category"
                        value={itemForm.category}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Image URL:
                    <input
                        type="text"
                        name="image"
                        placeholder="Enter Image URL"
                        value={itemForm.image}
                        onChange={handleChange}
                    />
                </label>
                <SubmitButton>Submit</SubmitButton>
            </form>
        </div>
    )
}
