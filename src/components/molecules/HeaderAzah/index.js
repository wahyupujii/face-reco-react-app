import React from 'react'
import "./headerazah.css";

const HeaderAzah = ({labelHeader}) => {
    return (
        <div className="header" >
            <div className="container-wrapper-headerazah" >
                <h1>{labelHeader}</h1>
            </div>
        </div>
    )
}

export default HeaderAzah
