import React from 'react'
import "./link.css";

const Link = ({text1 , text2 , onClick}) => {
    return (
        <p>
            {text1} 
            <span>
                {text2}
            </span>
        </p>
    )
}

export default Link
