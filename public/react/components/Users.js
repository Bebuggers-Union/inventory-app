import React from 'react'

export const User = (props) => {
    async function handleClick() {
        if (!props.userView) {
            props.setUserId(props.user.id)
            props.setUserView(true)
        } else {
            props.setUserId(props.user.id)
        }

        if (props.singleView) props.setSingleView(false)
    }

    return (
        <>
            <div className="userName">
                <h3
                    className="userName"
                    onClick={() => {
                        handleClick()
                    }}
                >
                    {props.user.name}
                </h3>
            </div>
        </>
    )
}
