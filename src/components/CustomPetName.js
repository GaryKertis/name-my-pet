import React, { Component } from 'react';
import PetName from "./PetName";
import { api, update } from "../utils/api";

class CustomPetName extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFetching: true
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { isFetching } = this.state;
    const { id } = this.props;
    if (isFetching) {
      api(id).then(pet => {
        this.setState({ isFetching: false, pet });
      });
    }
  }

  handleChange(event) {
    const { id } = this.props;
    const pet = { ...this.state.pet };
    pet.name = event.target.value;
    update(id, pet.name);
    this.setState({ pet });
  }

  render() {

    const { isFetching, pet } = this.state;
    let page = (<div className="loader"></div>);
    if (!isFetching) {
      page = (
        <div>
          <PetName name={pet.name} pet={pet.type}/>
          <input type="text" value={pet.name} onChange={this.handleChange}/>
        </div>);
    }
    return (
      <div className="custom_pet">
        {page}
      </div>
    );
  }

}

export default CustomPetName;
