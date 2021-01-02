import React from 'react'
import "./input.css";

const Input = ({...rest}) => {
    return (
        <div>
            <input {...rest} />
        </div>
    )
}

export default Input
