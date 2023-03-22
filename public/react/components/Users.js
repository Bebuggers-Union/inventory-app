import React from 'react'


export const User = (props) => {


    async function handleClick(){
        console.log("clicked")
    }


    return<>
        <div className='userName'>
            <h3 className= "userName" onClick = {handleClick}>{props.user.name}</h3>
        </div>
   
    </>
}
