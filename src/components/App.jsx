import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Profile from './pages/Profile';
import Cibus from './pages/Cibus';
import '../../assets/styles/App.scss'


const App = () => {
    let vh = window.innerHeight * 0.01;

    window.addEventListener('resize', () => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      });

    document.documentElement.style.setProperty('--vh', `${vh}px`);

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