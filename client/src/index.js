import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import App from './pages/App/index';
import Footer from './components/Footer';
import './index.css';


ReactDOM.render(
	<div>  
		<Header />
  		<App />
  		<Footer />
	</div>,
  	document.getElementById('root')
);