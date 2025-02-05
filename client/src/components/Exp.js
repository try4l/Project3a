import React from "react";
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import NumList from './NumList';
import SimpleForm from './SimpleForm';


const numbers = [1, 2, 3, 4, 5];

class Exp extends React.Component {

  render() {
    return (
	    	<div>	
	 	   		<h1>Hello {this.props.name}</h1>
	    		<NumList numbers={numbers} />
	    		<SimpleForm />

	    	      <Form>
			        <FormGroup row>
			          <Label for="exampleEmail" sm={2}>Email</Label>
			          <Col sm={10}>
			            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
			          </Col>
			        </FormGroup>
			        <FormGroup row>
			          <Label for="examplePassword" sm={2}>Password</Label>
			          <Col sm={10}>
			            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
			          </Col>
			        </FormGroup>
			        <FormGroup row>
			          <Label for="exampleSelect" sm={2}>Select</Label>
			          <Col sm={10}>
				          <Input type="select" name="select" id="exampleSelect">
				            <option>1</option>
				            <option>2</option>
				            <option>3</option>
				            <option>4</option>
				            <option>5</option>
				          </Input>
			          </Col>
			        </FormGroup>
			        <FormGroup row>
			          <Label for="exampleSelectMulti" sm={2}>Select Multiple</Label>
			          <Col sm={10}>
			            <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
				            <option>1</option>
				            <option>2</option>
				            <option>3</option>
				            <option>4</option>
				            <option>5</option>
				        </Input>
			          </Col>
			        </FormGroup>
			        <FormGroup row>
			          <Label for="exampleText" sm={2}>Text Area</Label>
			          <Col sm={10}>
			            <Input type="textarea" name="text" id="exampleText" />
			          </Col>
			        </FormGroup>
			        <FormGroup row>
			          <Label for="exampleFile" sm={2}>File</Label>
			          <Col sm={10}>
			            <Input type="file" name="file" id="exampleFile" />
			            <FormText color="muted">
			              This is some placeholder block-level help text for the above input.
			              It's a bit lighter and easily wraps to a new line.
			            </FormText>
			          </Col>
			        </FormGroup>
			        <FormGroup tag="fieldset" row>
			          <legend className="col-form-label col-sm-2">Radio Buttons</legend>
			          <Col sm={10}>
			            <FormGroup check>
			              <Label check>
			                <Input type="radio" name="radio2" />{' '}
			                Option one is this and that—be sure to include why it's great
			              </Label>
			            </FormGroup>
			            <FormGroup check>
			              <Label check>
			                <Input type="radio" name="radio2" />{' '}
			                Option two can be something else and selecting it will deselect option one
			              </Label>
			            </FormGroup>
			            <FormGroup check disabled>
			              <Label check>
			                <Input type="radio" name="radio2" disabled />{' '}
			                Option three is disabled
			              </Label>
			            </FormGroup>
			          </Col>
			        </FormGroup>
			        <FormGroup row>
			          <Label for="checkbox2" sm={2}>Checkbox</Label>
			          <Col sm={{ size: 10 }}>
			            <FormGroup check>
			              <Label check>
			                <Input type="checkbox" id="checkbox2" />{' '}
			                Check me out
			              </Label>
			            </FormGroup>
			          </Col>
			        </FormGroup>
			        <FormGroup check row>
			          <Col sm={{ size: 10, offset: 2 }}>
			            <Button>Submit</Button>
			          </Col>
			        </FormGroup>
			      </Form>

	    	</div>
    	)
  }

}

// import React from 'react';
// import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// export default class Example extends React.Component {
//   render() {
//     return (
//       <Form>
//         <FormGroup row>
//           <Label for="exampleEmail" sm={2}>Email</Label>
//           <Col sm={10}>
//             <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
//           </Col>
//         </FormGroup>
//         <FormGroup row>
//           <Label for="examplePassword" sm={2}>Password</Label>
//           <Col sm={10}>
//             <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
//           </Col>
//         </FormGroup>
//         <FormGroup row>
//           <Label for="exampleSelect" sm={2}>Select</Label>
//           <Col sm={10}>
//             <Input type="select" name="select" id="exampleSelect" />
//           </Col>
//         </FormGroup>
//         <FormGroup row>
//           <Label for="exampleSelectMulti" sm={2}>Select Multiple</Label>
//           <Col sm={10}>
//             <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple />
//           </Col>
//         </FormGroup>
//         <FormGroup row>
//           <Label for="exampleText" sm={2}>Text Area</Label>
//           <Col sm={10}>
//             <Input type="textarea" name="text" id="exampleText" />
//           </Col>
//         </FormGroup>
//         <FormGroup row>
//           <Label for="exampleFile" sm={2}>File</Label>
//           <Col sm={10}>
//             <Input type="file" name="file" id="exampleFile" />
//             <FormText color="muted">
//               This is some placeholder block-level help text for the above input.
//               It's a bit lighter and easily wraps to a new line.
//             </FormText>
//           </Col>
//         </FormGroup>
//         <FormGroup tag="fieldset" row>
//           <legend className="col-form-label col-sm-2">Radio Buttons</legend>
//           <Col sm={10}>
//             <FormGroup check>
//               <Label check>
//                 <Input type="radio" name="radio2" />{' '}
//                 Option one is this and that—be sure to include why it's great
//               </Label>
//             </FormGroup>
//             <FormGroup check>
//               <Label check>
//                 <Input type="radio" name="radio2" />{' '}
//                 Option two can be something else and selecting it will deselect option one
//               </Label>
//             </FormGroup>
//             <FormGroup check disabled>
//               <Label check>
//                 <Input type="radio" name="radio2" disabled />{' '}
//                 Option three is disabled
//               </Label>
//             </FormGroup>
//           </Col>
//         </FormGroup>
//         <FormGroup row>
//           <Label for="checkbox2" sm={2}>Checkbox</Label>
//           <Col sm={{ size: 10 }}>
//             <FormGroup check>
//               <Label check>
//                 <Input type="checkbox" id="checkbox2" />{' '}
//                 Check me out
//               </Label>
//             </FormGroup>
//           </Col>
//         </FormGroup>
//         <FormGroup check row>
//           <Col sm={{ size: 10, offset: 2 }}>
//             <Button>Submit</Button>
//           </Col>
//         </FormGroup>
//       </Form>
//     );
//   }
// }

// Same as this
// function Exp(props) {
//   return <h1>Hello, {props.name}</h1>;
// }


// export default Exp;

// import { UncontrolledCarousel } from 'reactstrap';

// const items = [
//   {
//     src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
//     altText: 'Slide 1',
//     caption: 'Slide 1'
//   },
//   {
//     src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
//     altText: 'Slide 2',
//     caption: 'Slide 2'
//   },
//   {
//     src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
//     altText: 'Slide 3',
//     caption: 'Slide 3'
//   }
// ];

// const Exp = () => <UncontrolledCarousel items={items} />;

export default Exp;
