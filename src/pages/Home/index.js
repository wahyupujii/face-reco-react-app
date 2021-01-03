import React, { Fragment } from 'react'
import { Gap } from '../../components';
import "./home.css";
import {Header} from "../../components";
import {useHistory} from "react-router-dom";

const Home = () => {
    const history = useHistory();
    return (
        <Fragment>
            <Header labelHeader="RecoViso" bgColor="#4896F2" labelBtn="Login" onClick={() => history.push('login')} />
            <div className="home">
            <div className="container">
                <Gap height={30}/>
                <h1>A Powerfull Face Recognition App</h1>
                <Gap height={20} />
                <h3>You can easily use this application by simply filling in 
                    the image link that you have
                    </h3>
            </div>
            </div>
        </Fragment>
    )
}

export default Home
