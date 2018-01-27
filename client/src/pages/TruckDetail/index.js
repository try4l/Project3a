import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { CardColumns, CardGroup } from 'reactstrap';
import classnames from 'classnames';

import './style.css';

// App Components
import Wrapper from "../../components/Wrapper";
import Truck from "../../components/Truck";
import API from "../../utils/api";
import trucks from "../../trucks.json";

class TruckDetail extends Component {
  constructor(props) {
  super(props);
  this.state = {
    trucks,
    saved: []
    };
  }

 // When the component mounts, get a list of all saved articles and update this.state.saved
  componentDidMount() {
    this.getSavedTrucks()
  }

  // NOTE: 
  // To use real database data, use: 
  //    {this.state.saved.map(truck => (
  //  below
  // To use canned data for demo, use:
  //    {this.state.trucks.map(truck => (
  // Other form for detailed truck info (times and locations) can be extended to use real data using
  // the same strategy.
    
  // Method for getting saved articles (all articles) from database
  getSavedTrucks = () => {
    API.getTruck()
      .then((res) => {
        this.setState({ saved: res.data });
      });
  }

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('About', className)} {...props}>

      <Container >

        <Wrapper>
          <h1>
            Truck Detail
          </h1>

          <CardGroup>
            <CardColumns>

              {this.state.trucks.map(truck => (
                <Truck
                id={truck.id}
                key={truck.id}
                name={truck.name}
                image={truck.image}
                rating={truck.rating}            
                owner={truck.owner}            
                description={truck.description}            
                numRatings={truck.numRatings} 
                date={truck.date}           
                />
              ))}

          </CardColumns>         
        </CardGroup>

        </Wrapper>

      </Container>

      </div>
    );
  }
}

export default TruckDetail;