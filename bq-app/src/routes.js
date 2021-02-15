import React from 'react';
import Home from './Home';
import Login from './Login';
import Subscribe from './Subscribe';
import { Switch, Route, Redirect } from 'react-router-dom';

// const PrivateRoute = ({component: Component, ...rest}) => (
// <Route 
//     {...rest}
//     render={props => ({Login} ? (
//         <Component {...props} />
//     ) : (
//         <Redirect to={{pathname:"/home", state: {from: props.location}}} />
//     )
//     )}
// />
// )

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