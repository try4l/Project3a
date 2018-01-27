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

  // Method for getting saved articles (all articles) from database
  // getSavedArticles = () => {
  //   API.getArticle()
  //     .then((res) => {
  //       this.setState({ saved: res.data });
  //     });
  // }

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

  // Helper method renders one div for each saved article
  //   renderSaved = () => {
  //   return this.state.saved.map(save => (
  //     <Saved
  //       _id={save._id}
  //       key={save._id}
  //       title={save.title}
  //       date={save.date}
  //       url={save.url}
  //       handleDeleteButton={this.handleDeleteButton}
  //       getSavedArticles={this.getSavedArticles}
  //     />
  //   ));
  // }
 
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
  //   .then(this.getSavedArticles());
    // //API.searchNYT(this.state.topic, this.state.startYear, this.state.endYear)
    //   .then((res) => {
    //     this.setState({ articles: res.data.response.docs });
    //     console.log("this.state.articles: ", this.state.articles);
      // });
  }

  // On save article button click, add article to database
  // handleSaveButton = (id) => {
  //   const findArticleByID = this.state.articles.find((el) => el._id === id);
  //   console.log("findArticleByID: ", findArticleByID);
  //   const newSave = {title: findArticleByID.headline.main, date: findArticleByID.pub_date, url: findArticleByID.web_url};
  //   API.saveArticle(newSave)
  //   .then(this.getSavedArticles());
  // }

  // On delete article button click, remove article from database
  // handleDeleteButton = (id) => {
  //   API.deleteArticle(id)
  //     .then(this.getSavedArticles());
  // }
  
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
