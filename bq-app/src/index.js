import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import Home from './Home/Home';
import Login from './Login/Login'
import reportWebVitals from './reportWebVitals';
import { BrownserRouter as Router, Switch, Route, Link } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
