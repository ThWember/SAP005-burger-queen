import React from 'react';
import Home from './Home';
import Login from './Login';
import Subscribe from './Subscribe';
import { Switch, Route } from 'react-router-dom';


const Routes = () => {
    return(
        <Switch>
            <Route path='/' component={Login} exact/>
            <Route path='/subscribe' component={Subscribe} exact/>
            <Route path='/home' component={Home} exact/>
        </Switch>
    )
}

export default Routes;