import React, { Component } from "react";
import Saved from "./Saved";
import Search from "./Search";
import Results from "./Results";
//import Trucks from "./Trucks";
import trucks from "./Trucks/trucks.json";
//import API from "../utils/api";
import {Image} from 'react-bootstrap';

class Main extends Component {

  state = {
    topic: "",
    startYear: "",
    endYear: "",
    articles: [],
    saved: [],
    trucks: [],
  };

  // When the component mounts, get a list of all saved articles and update this.state.saved
  componentDidMount() {
    //this.getSavedArticles()
  }

  // Method for getting saved articles (all articles) from database
  // getSavedArticles = () => {
  //   API.getArticle()
  //     .then((res) => {
  //       this.setState({ saved: res.data });
  //     });
  // }

  // Helper method renders one search result div for each article
  renderTrucks = () => {
    return this.state.articles.map(truck => (
      <Results
        _id={truck._id}
        key={truck._id}
        name={truck.name}
        date={truck.date}
      />
    ));
  }

  // Helper method renders one div for each saved article
    renderSaved = () => {
    return this.state.saved.map(save => (
      <Saved
        _id={save._id}
        key={save._id}
        title={save.title}
        date={save.date}
        url={save.url}
        handleDeleteButton={this.handleDeleteButton}
        getSavedArticles={this.getSavedArticles}
      />
    ));
  }
  // renderSaved = () => {
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

  // Keep track of what user types into topic input so that input can be grabbed later
  handleTopicChange = (event) => {
    this.setState({ topic: event.target.value });
  }

  // Keep track of what user types into topic input so that input can be grabbed later
  handleStartYearChange = (event) => {
    this.setState({ startYear: event.target.value });
  }

  // Keep track of what user types into topic input so that input can be grabbed later
  handleEndYearChange = (event) => {
    this.setState({ endYear: event.target.value });
  }

  // On form submits, perform NYT api search with user input
  // handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("Getting NYT Articles");
  //   console.log("this.state.topic: ", this.state.topic);
  //   console.log("this.state.startYear: ", this.state.startYear);
  //   console.log("this.state.endYear: ", this.state.endYear);
  //   API.searchNYT(this.state.topic, this.state.startYear, this.state.endYear)
  //     .then((res) => {
  //       this.setState({ articles: res.data.response.docs });
  //       console.log("this.state.articles: ", this.state.articles);
  //     });
  // }

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

    var background = {backgroundSize : 'cover', margin: 'auto'};

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

            <Search
            handleTopicChange={this.handleTopicChange}
            handleStartYearChange={this.handleStartYearChange}
            handleEndYearChange={this.handleEndYearChange}
            handleFormSubmit={this.handleFormSubmit}
            renderTrucks={this.renderTrucks}
          />
          {/* Saved Articles Section */}
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title">
                      <strong>
                        <i className="fa fa-truck" aria-hidden="true"></i> Saved Trucks</strong>
                    </h3>
                  </div>
                  <div className="panel-body">
                    <ul className="list-group">
                      {this.renderSaved()}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer>
            <hr />
            <p className="pull-left">
              <i className="fa fa-github" aria-hidden="true"></i>
              Built using React.js
            </p>
          </footer>

        </div>
      </div>

    );
  }

}

export default Main;
