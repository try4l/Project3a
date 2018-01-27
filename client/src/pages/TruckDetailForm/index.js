import React, { Component } from 'react';
import classnames from 'classnames';

import './style.css';

// App Components
import Saved from "../../components/Saved";
import Results from "../../components/Results";
import TruckForm from "../../components/TruckForm";
import API from "../../utils/api";

class TruckDetailForm extends Component {
  // constructor(props) {
  //  super(props);
  //  this.state = {date: new Date()};
  // }
  static propTypes = {}
  static defaultProps = {}
  state = {
    name: "",
    image: "",
    rating: 0,
    numRatings: 0,
    owner: "",
    description: "",
    date: new Date(),
    trucks: []    
  };

  // When the component mounts, get a list of all saved trucks and update this.state.saved
  componentDidMount() {
    //this.getSavedTrucks()
  }


  // Helper method renders one search result div for each truck
  renderTrucks = () => {
    return this.state.trucks.map(truck => (
      <Results
        _id={truck._id}
        key={truck._id}
        name={truck.name}
        image={truck.date}
        rating={truck.date}
        numRatings={truck.date}
        owner={truck.date}
        description={truck.date}
        date={truck.date}
      />
    ));
  }

 
  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  }

  handleImageChange = (event) => {
    this.setState({ image: event.target.value });
  }

  handleRatingChange = (event) => {
    this.setState({ rating: event.target.value });
  }

  handleNumRatingsChange = (event) => {
    this.setState({ numRatings: event.target.value });
  }

  handleOwnerChange = (event) => {
    this.setState({ owner: event.target.value });
  }

  handleDescriptionChange = (event) => {
    this.setState({ description: event.target.value });
  }

  handleDateChange = (event) => {
    this.setState({ date: event.target.value });
  }

 
 // On formsubmit, add truck to the database
  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("TruckDetailForm: handleFormSubmit");
    console.log("event", this.state);
    console.log("this.state.name: ", this.state.name);
    console.log("this.state.image: ", this.state.image);
    console.log("this.state.rating: ", this.state.rating);   
    console.log("this.state.numRatings: ", this.state.numRatings);   
    console.log("this.state.owner: ", this.state.owner);   
    console.log("this.state.description: ", this.state.description);   
    console.log("this.state.date: ", this.state.date);   
    const newSave = 
      {
        name: this.state.name, image: this.state.image, rating: this.state.rating, 
        numRatings: this.state.numRatings, owner: this.state.owner, description: this.state.description,
        date: this.state.date
      };
    API.saveTruck(newSave)
      .then(
        console.log("Saved!")
        );
  }

  
  render() {
    const { className, ...props } = this.props;
    return (

      <div className="main-container">
        <div className="container">

          <div className={classnames('TruckDetailForm', className)} {...props}>
            <h1>
              Truck Detail Form
            </h1>
          </div>

              <TruckForm
                handleNameChange={this.handleNameChange}
                handleImageChange={this.handleImageChange}
                handleRatingChange={this.handleRatingChange}
                handleNumRatingsChange={this.handleNumRatingsChange}
                handleOwnerChange={this.handleOwnerChange}
                handleDescriptionChange={this.handleDescriptionChange}
                handleDateChange={this.handleDateChange}
                handleFormSubmit={this.handleFormSubmit}
                renderTrucks={this.renderTrucks}
              />

        </div>
      </div>  
    );
  }
}

export default TruckDetailForm;
