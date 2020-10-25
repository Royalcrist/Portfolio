import React from 'react';
import { Switch, Route } from 'react-router';
import HomePage from './pages/HomePage';
import Profile from './pages/Profile';
import Cibus from './pages/Cibus';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/profile" component={Profile} />
    <Route path="/cibus" component={Cibus} />
  </Switch>
);

export default Routes;
