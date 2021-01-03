import React from 'react'
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom'
import FaceReco from '../FaceReco'
import Home from '../Home'

const MainApp = () => {
    return (
        <div>
            <p>Header</p>
            <Router>
                <Switch>
                    <Route path="/facereco">
                        <FaceReco />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default MainApp
