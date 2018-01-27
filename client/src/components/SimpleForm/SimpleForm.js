import React from "react";

class SimpleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value1: 'me', value2: '0'};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
      const target = event.target;
      const name = target.name;
      const value = target.value;
        this.setState({
      [name]: value
    });
  }
  
  

  handleSubmit(event) {
    alert('A name and address was submitted: ' + this.state.value1 + "  " + this.state.value2);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input name="value1" type="text" value={this.state.value1} onChange={this.handleChange} />
        </label>
        <label>
          Address:
          <input name="value2" type="text" value={this.state.value2} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SimpleForm;