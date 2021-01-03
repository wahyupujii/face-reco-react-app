import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { MainApp, Login, Register } from '../../pages'
import FaceReco from '../../pages/FaceReco'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/">
                    <MainApp />
                </Route>
                <Route path="/facereco">
                    <FaceReco />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;
