import React from 'react';
import Saloon from './Saloon';
import Login from './Login';
import Subscribe from './Subscribe';
import { Switch, Route } from 'react-router-dom';


const Routes = () => {
    return(
        <Switch>
            <Route path='/' component={Login} exact/>
            <Route path='/subscribe' component={Subscribe} exact/>
            <Route path='/saloon' component={Saloon} exact/>
            <Route path='/kitchen' component={Kitchen} exact/>
        </Switch>
    )
}

export default Routes;