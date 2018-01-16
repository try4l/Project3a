// src/routes.js
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import App from './pages/App';
import Main from './pages/Main';
import About from './pages/About';
import NotFound from './pages/NotFound';


ReactDOM.render((
  <BrowserRouter>
    <App/>
  </BrowserRouter>
), el);


export default Routes;
