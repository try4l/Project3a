// src/components/About/index.js
import React, { Component } from 'react';
import classnames from 'classnames';

import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Card, Button, ButtonGroup, CardTitle, CardText, Row, Col, CardLink } from 'reactstrap';

import './style.css';

class SignUp extends Component {
  constructor (props) {
    super(props);

    this.state = { rSelected: 1};

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }

  // When the component mounts, show clicked button
  componentDidMount() {
    //this.state.rSelected=1;
  }

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('About', className)} {...props}>
        <Form>

          <FormGroup tag="fieldset">
            <legend>User Type</legend>
            <FormGroup check inline>
              <Label check>
                <Input type="radio" name="radio1" checked={this.state.rSelected===1} onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1} />{' '}
                Foodie
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input type="radio" name="radio1" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2} />{' '}
                ADMIN
              </Label>
            </FormGroup>
          </FormGroup>

          <div className="row justify-content-center">
            <Col sm="6">
              <Card body>
                <CardTitle>Tell us above.</CardTitle>
                <CardText>Are you a site administrator or are you just hungry?</CardText>
                <Button href={this.state.rSelected!==1? "/admin":" /user"} >Show Me! </Button>
              </Card>
            </Col>
          </div>

          <p>Selected: {this.state.rSelected===1? "/user":" /admin"}</p>

        </Form>
      </div>
    );
  }
}


export default SignUp;
