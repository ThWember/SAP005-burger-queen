import React from 'react';
import Saloon from './Pages/Saloon/Saloon';
import Login from './Pages/Login/Login';
import Kitchen from './Pages/Kitchen/Kitchen';
import Subscribe from './Pages/Subscribe/Subscribe';
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