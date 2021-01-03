import React from 'react'
import "./link.css";

const Link = ({text1 , text2 , ...rest}) => {
    return (
        <p {...rest}>
            {text1} 
            <span>
                {text2}
            </span>
        </p>
    )
}

export default Link
