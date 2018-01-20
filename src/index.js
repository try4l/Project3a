import React from 'react';
import ReactDOM from 'react-dom';
//import { browserHistory } from 'react-router';

import Header from './components/Header';
import App from './pages/App';
import Footer from './components/Footer';
import Exp from './components/Exp';
import Clock from './components/Clock';

import './index.css';

ReactDOM.render(
	<div>
		<Header />
  		<App />
  		<Footer />
	</div>,
  	document.getElementById('root')
);