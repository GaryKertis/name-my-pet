import React, { Component } from 'react';
import PetName from "./PetName";

class CustomPetName extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'No Name Yet'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  render() {

    const { pet } = this.props;
    const { name } = this.state;

    return (
      <div className="custom_pet">
        <PetName name={name} pet={pet}/>
        <input type="text" value={this.state.name} onChange={this.handleChange}/>
      </div>
    );
  }

}

export default CustomPetName;
