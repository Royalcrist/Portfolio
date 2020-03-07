import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Cibus from './pages/Cibus';


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/cibus" component={Cibus} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;