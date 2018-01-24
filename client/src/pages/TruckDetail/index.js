import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { CardColumns, CardDeck, CardGroup } from 'reactstrap';
import classnames from 'classnames';

import './style.css';

// App Components
import Saved from "../../components/Saved";
import Results from "../../components/Results";
import Wrapper from "../../components/Wrapper";
import Title from "../../components/Title";
import Truck from "../../components/Truck";
import API from "../../utils/api";
import trucks from "../../trucks.json";

class TruckDetail extends Component {
  constructor(props) {
  super(props);
  this.state = {
    trucks
    };
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
                image={truck.image}
                name={truck.name}
                rating={truck.rating}            
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