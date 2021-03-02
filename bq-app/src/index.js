import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './Routes/reportWebVitals';
import Routes from './Routes/routes';
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
