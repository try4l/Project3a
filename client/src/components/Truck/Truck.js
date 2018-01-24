import React from "react";
import { Container, Row, Col } from 'reactstrap';
import {Image} from 'react-bootstrap';
import classnames from 'classnames';

class Truck extends React.Component {
  state = {

    };

  render() {
    const { className, ...props } = this.props;
    return (

      <Container>

        <Row>
          <Col> <h2>{this.props.name}</h2> </Col>
        </Row>

        <div className="img-container">
          <img alt={this.props.name} src={this.props.image} />
        </div>

        <Row>
          <Col> <h2>{this.props.rating}</h2> </Col>
        </Row>

      </Container>

    );
  }
}


export default Truck;