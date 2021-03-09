import React, { Component } from 'react';
import PetName from "./PetName";
import { api } from "../utils/api";

class CustomPetName extends Component {
  constructor(props) {
    super(props)

    // Use `api` above to get the data.
    // the id comes from props. (ex. props.id = 1)
    this.state = {
      pet: {}
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // Fill this out!!!
  componentDidMount() {
  }

  handleChange(event) {
    const pet = { ...this.state.pet };
    pet.name = event.target.value;
    this.setState({ pet });
  }

  render() {

    const { pet } = this.state;
    const loader = (<div className="loader"></div>);
    const page = (
      <div>
        <PetName name={pet.name} pet={pet.type}/>
        <input type="text" value={pet.name} onChange={this.handleChange}/>
      </div>);
    return (
      <div className="custom_pet">
        {page}
      </div>
    );
  }

}

export default CustomPetName;
