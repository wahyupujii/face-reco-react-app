import React from 'react'
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom'
import FaceReco from '../FaceReco'
import Home from '../Home'
import {Header} from "../../components";
import "./main.css";
import Login from '../Login';
import Register from '../Register';

const MainApp = () => {
    return (
        <div className="main-app-wrapper">
            <Router>
                <Switch>
                    <Route path="/facereco">
                        {/* <Header labelHeader="RecoViso" bgColor="red" labelBtn="Logout" /> */}
                        <FaceReco />
                    </Route>
                    <Route path="/">
                        {/* <Header labelHeader="RecoViso" bgColor="#4896F2" labelBtn="Login" /> */}
                        <Home />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default MainApp
