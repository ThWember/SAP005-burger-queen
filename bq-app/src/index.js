import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Routes from './routes'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
<BrowserRouter>
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
</BrowserRouter>,
 document.getElementById('root')
);

reportWebVitals();
