import React, { Component } from "react";

// App Components
import logo from '../../pages/App/logo.svg';

const Footer = () => {
	return (
  	<div>
      <hr />
      <p className="row justify-content-center">
        <i className="fa fa-github" aria-hidden="true"></i>
        Built using React.js
        <img src={logo} className="App-logo" alt="logo" />
      </p>
    </div>  
  );
}

export default Footer;
