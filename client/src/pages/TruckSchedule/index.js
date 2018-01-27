// Shows Detailed Truck Data (time and location)
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import './style.css';

// App Components

// Note: Showing hardcoded data for now -- extend this as per the TruckDetail index.js form
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
          Truck Schedule
        </h1>
        <Row>
          <Col xs="6"> <h2>When</h2> </Col>
          <Col xs="6"> <h2>Where</h2> </Col>
        </Row>
        <Row>
          <Col xs="6"> <hr /> </Col>
          <Col xs="6"> <hr /> </Col>
        </Row>
        <Row>
          <Col> <h3>Day</h3> </Col>
          <Col> <h3>Start Time</h3> </Col>
          <Col> <h3>Stop Time</h3> </Col>
          <Col> <h3>Lat</h3> </Col>
          <Col> <h3>Long</h3> </Col>
          <Col> <h3>Map</h3> </Col>
        </Row>
        <Row>
          <Col>Mon</Col>
          <Col>0900</Col>
          <Col>1700</Col>
          <Col>32.715738</Col>
          <Col>-117.161084</Col>
          <Col> {<a href="https://www.latlong.net/c/?lat=32.715738&long=-117.161084" target="_blank" rel="noopener noreferrer">link</a>}  </Col>
        </Row>
        <Row>
          <Col>Tues</Col>
          <Col>0800</Col>
          <Col>1600</Col>
          <Col>32.712073</Col>
          <Col>-117.151358</Col>
          <Col> {<a href="https://www.latlong.net/c/?lat=32.712073&long=-117.151358" target="_blank" rel="noopener noreferrer">link</a>}  </Col>
        </Row>
        <Row>
          <Col>Wed</Col>
          <Col>0630</Col>
          <Col>1430</Col>
          <Col>32.853093</Col>
          <Col>-117.182901</Col>
          <Col> {<a href="https://www.latlong.net/c/?lat=32.853093&long=-117.182901" target="_blank" rel="noopener noreferrer">link</a>}  </Col>
        </Row>
        <Row>
          <Col>Thur</Col>
          <Col>0800</Col>
          <Col>1600</Col>
          <Col>32.833052</Col>
          <Col>-117.159975</Col>
          <Col> {<a href="https://www.latlong.net/c/?lat=32.833052&long=-117.159975" target="_blank" rel="noopener noreferrer">link</a>}  </Col>
        </Row>
        <Row>
          <Col>Fri</Col>
          <Col>0600</Col>
          <Col>2200</Col>
          <Col>32.715960</Col>
          <Col>-117.146026</Col>
          <Col> {<a href="https://www.latlong.net/c/?lat=32.715960&long=-117.146026" target="_blank" rel="noopener noreferrer">link</a>} </Col>
        </Row>
        
      </Container>

      </div>
    );
  }
}

export default TruckSchedule;