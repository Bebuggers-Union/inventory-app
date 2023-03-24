import React from 'react'
import { Container } from '../Containers/Container'
import { Form } from './Form'
import { FormBox } from './FormBox'
import { SubmitButton } from '../Buttons/SubmitButton'

export const NewItemForm = ({
    itemForm,
    handleChange,
    handleSubmit,
    itemFormErrors,
    serverErrors,
}) => {
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <h3>Create New Item</h3>
                {itemFormErrors && <div>{itemFormErrors}</div>}
                {serverErrors.length > 0 ? (
                    <div> Please enter all fields</div>
                ) : null}
                <FormBox>
                    <div className="container-fluid">
                        <label htmlFor="new-item-form">Title: </label>
                        <input
                            type="text"
                            id="new-item-form"
                            name="title"
                            placeholder="Playstation 5"
                            value={itemForm.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="container-fluid">
                        <label htmlFor="new-price-form">Price: </label>
                        <input
                            type="text"
                            id="new-price-form"
                            name="price"
                            placeholder="600"
                            value={itemForm.price}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="container-fluid">
                        <label htmlFor="new-description-form">
                            Description:{' '}
                        </label>
                        <input
                            type="text"
                            id="new-description-form"
                            name="description"
                            placeholder="A console for gaming"
                            value={itemForm.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="container-fluid">
                        <label htmlFor="new-category-form">Category: </label>
                        <input
                            type="text"
                            id="new-category-form"
                            name="category"
                            placeholder="Gaming"
                            value={itemForm.category}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="container-fluid">
                        <label htmlFor="new-image-form">Image URL: </label>
                        <input
                            type="text"
                            id="new-image-form"
                            name="image"
                            placeholder="https://www.playstation.com/playstation5"
                            value={itemForm.image}
                            onChange={handleChange}
                        />
                    </div>
                </FormBox>
                <SubmitButton>Submit</SubmitButton>
            </Form>
        </Container>
    )
}
