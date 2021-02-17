import React from 'react';
import Saloon from './Pages/Saloon';
import Login from './Pages/Login';
import Kitchen from './Pages/Kitchen';
import Subscribe from './Pages/Subscribe';
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