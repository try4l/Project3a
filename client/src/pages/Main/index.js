import React, { Component } from "react";
import {Image} from 'react-bootstrap';

// App Components
import Saved from "../../components/Saved";
import TruckForm from "../../components/TruckForm";
import Results from "../../components/Results";
import Truck from "../../components/Truck";
import trucks from "../../trucks.json";


class Main extends Component {
  constructor(props) {
  super(props);
  this.state = {
    trucks
    };
  }  

  // When the component mounts, get a list of all saved articles and update this.state.saved
  componentDidMount() {
    //this.getSavedArticles()
  }

  render() {

    var background = {backgroundSize : 'cover', margin: 'auto'};
    const { className, ...props } = this.props;

    return (

      <div className="main-container">
        <div className="container">

          {/* Jumbotron - Title, logo, image */}
          <div className="jumbotron">

                <Image 
                  style={background} responsive
                  className="row justify-content-center"
                  src="/assets/images/foodtruck3.png">
                </Image>

            <h1 className="text-center"><strong>Find your favorite food truck goodness.</strong></h1>
            <h2 className="text-center">Hey Dude... Where's My Food?</h2>
          </div>

          {/* Map */}
            <div className="row justify-content-center">
            <Image 
              style={background} responsive 
              src="/assets/images/san-diego-area-map.jpg">
            </Image>
            </div>

            <div> <br/> <hr/> <br/></div>

            <div className="btn-toolbar row justify-content-center" role="toolbar" aria-label="Toolbar with button groups">
              <div className="btn-group mr-2" role="group" aria-label="First group">
                <button type="button" className="btn btn-secondary">Sun</button>
              </div>
              <div className="btn-group mr-2" role="group" aria-label="Second group">
                <button type="button" className="btn btn-secondary">Mon</button>
                <button type="button" className="btn btn-secondary">Tues</button>
                <button type="button" className="btn btn-secondary">Wed</button>
                <button type="button" className="btn btn-secondary">Thurs</button>
                <button type="button" className="btn btn-secondary">Fri</button>
              </div>
              <div className="btn-group mr-2" role="group" aria-label="Third group">
                <button type="button" className="btn btn-secondary">Sat</button>
              </div>
            </div>

            <div> <br/> <hr/> <br/></div>

            {this.state.trucks.map(truck => (
              <Truck
              id={truck.id}
              key={truck.id}
              image={truck.image}
              name={truck.name}
              rating={truck.rating}            
              />
            ))}

        </div>
      </div>

    );
  }
}

export default Main;
