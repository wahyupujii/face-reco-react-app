import React from 'react'
import "./input.css";

const Input = ({width , height , ...rest}) => {
    return (
        <div>
            <input style={{width , height}} {...rest} />
        </div>
    )
}

export default Input
