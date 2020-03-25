import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Profile from './pages/Profile';
import Cibus from './pages/Cibus';
import '../../assets/styles/App.scss'


const App = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ HomePage } />
                <Route path="/profile" component={ Profile } />
                <Route path="/cibus" component={Cibus} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;