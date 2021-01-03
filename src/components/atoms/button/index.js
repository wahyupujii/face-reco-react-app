import React from 'react'
import "./button.css";

const Button = ({label , height , width , backgroundColor , ...rest}) => {
    return (
        <div>
            <button {...rest} style={{height , width , backgroundColor}} >{label}</button>
        </div>
    )
}

export default Button
