import React from 'react'
import "./header.css";
import { Button } from '../../atoms'
import {useHistory} from "react-router-dom";

const Header = ({labelHeader , bgColor , labelBtn , ...rest}) => {
    const history = useHistory();
    return (
        <div className="header" >
            <div className="container-wrapper" >
                <h1>{labelHeader}</h1>
                <Button label={labelBtn} height={50} width={150} backgroundColor={bgColor} {...rest} />
            </div>
        </div>
    )
}

export default Header
