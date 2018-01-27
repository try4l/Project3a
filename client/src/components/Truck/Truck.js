import React from "react";
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardBody } from 'reactstrap';

class Truck extends React.Component {
  state = {

    };

  render() {

    return (

      <Container>

        <Row>
          <Col> <h2>{this.props.name}</h2> </Col>
        </Row>

        <Card>
          <CardBody>
            <CardImg top width="100%" src={this.props.image} alt={this.props.name} />
          </CardBody>
        </Card>

        <Row>
          <Col> <h2>Rating = {this.props.rating}</h2> </Col>
        </Row>

      </Container>

    );
  }
}


export default Truck;