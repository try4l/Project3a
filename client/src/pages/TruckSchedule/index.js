import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import './style.css';

// App Components
import Saved from "../../components/Saved";
import Results from "../../components/Results";
import API from "../../utils/api";

class TruckSchedule extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('About', className)} {...props}>

      <Container>

        <h1>
          Truck Detail
        </h1>
        <Row>
          <Col xs="6"> <h2>When</h2> </Col>
          <Col xs="6"> <h2>Where</h2> </Col>
        </Row>
        <Row>
          <Col> <h3>Day</h3> </Col>
          <Col> <h3>Start Time</h3> </Col>
          <Col> <h3>Stop Time</h3> </Col>
          <Col> <h3>Lat</h3> </Col>
          <Col> <h3>Long</h3> </Col>
          <Col> <h3>Edit</h3> </Col>
        </Row>
        <Row>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
        </Row>
        <Row>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
        </Row>
        <Row>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
        </Row>
        <Row>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
        </Row>
        
      </Container>

      </div>
    );
  }
}

export default TruckSchedule;