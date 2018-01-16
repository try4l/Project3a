//import React, { Component } from 'react';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';

// Page Components
// SHARED
import UserAccount from '../UserAccount';
// ADMIN ROUTE COMPONENTS
import AdminHome from '../AdminHome';
import TruckDetailForm from '../TruckDetailForm';
// CLIENT ROUTE COMPONENTS
import UserHome from '../UserHome';
// PUBLIC ROUTE COMPONENTS
import Main from '../Main';
import Auth from '../Auth';
import About from '../About';
import SignUp from '../SignUp';
import TruckDetail from '../TruckDetail';

import NotFound from '../NotFound';


const App = () => {
	return (
		<Router>
			<div>

		      <hr/>

		      <Switch>
		      	{/* SHARED ROUTES */}
		      	<Route exact path="/account" component={UserAccount}/>
			  	{/* ADMIN ROUTES */}
				<Route exact path="/admin" component={AdminHome}/>
				<Route exact path="/admin/account" component={UserAccount}/>
				<Route path="/admin/truck/:id" component={TruckDetailForm}/>
			   	{/* CLIENT ROUTES */}
			   	<Route exact path="/user" component={UserHome}/>
			   	
				{/* PUBLIC ROUTES */}
				<Route exact path="/" component={Main}/>
				<Route exact path="/auth" component={Auth}/>
				<Route exact path="/signUp" component={SignUp}/>
				<Route path="/truck/:id" component={TruckDetail}/>
				<Route exact path="/about" component={About}/>
				<Route component={NotFound}/>
			      
		      </Switch>

		    </div>
	    </Router>
    )
}

export default App;
