import React, { Fragment } from 'react'
import { Gap, HeaderAzah } from '../../components';
import "./home.css";

const Home = () => {
    return (
        <Fragment>
            <HeaderAzah labelHeader="Recoviso"/>
            <div className="home">
                <div className="container">
                    <h1>A Powerfull Face Recognition App</h1>
                    <Gap height={40} />
                    <h3>You can easily use this application by simply filling in 
                        the image link that you have
                    </h3>
                    <Gap height={40} />
                    
                    <div className="tombolLink">
                        <a href="http://localhost:3000/login">
                            <button className="login">Login</button>
                        </a>
                        <a href="http://localhost:3000/register">
                            <button className="register">Register</button>
                        </a>
                    </div>
                    
                </div>
            </div>
        </Fragment>
    )
}

export default Home
