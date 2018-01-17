// src/components/About/index.js
import React, { Component } from 'react';
import classnames from 'classnames';

import './style.css';


class About extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  render() {
    const { className, ...props } = this.props;
    return (

      <div className={classnames('About', className)} {...props}>
        <div className="container">
        <div className="row justify-content-center">

          <div className="card" style={{width: "36rem", padding: "20px", margin: "20px"}}>

            <img className="card-img-top" src="/assets/images/carissa-gan-76304.jpg" alt="Card cap" />

            <div className="card-body">
              <h3 className="card-title">Food Truck Locator App</h3>
              <i className="card-text">Find out where you favorite food is right now.</i>
            </div>

            <ul className="list-group list-group-flush">
              <li className="list-group-item">Katie - "Do they have those little tiny peanut butter and jelly tacos?"</li>
              <li className="list-group-item">Alan - "I can't believe I ate a whole pizza."</li>
              <li className="list-group-item">Carlos - "What, there's food.... Where??"</li>
            </ul>

            <div className="card-body">
              <div className="row">

                <div className="col-sm">
            
                        <p className="pull-left">
                          <i className="fa fa-github" aria-hidden="true"></i>
                        <a href="https://github.com/kyarber2" className="card-link">Katie</a>
                        </p>
                </div>
            
                <div className="col-sm">
                        <p className="pull-left">
                          <i className="fa fa-github" aria-hidden="true"></i>
                        <a href="https://github.com/try4l" className="card-link">Alan</a>
                        </p>
                </div>
            
                <div className="col-sm">
                        <p className="pull-left">
                          <i className="fa fa-github" aria-hidden="true"></i>
                        <a href="https://github.com/MrSpahceman" className="card-link">Carlos</a>
                        </p>
                </div>

              </div>    
            </div>

          </div>
        </div>
        </div>
      </div>
    );
  }

}

export default About;
