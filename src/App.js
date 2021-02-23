import React, { Component } from 'react';
import CustomPetName from './components/CustomPetName';

const ids = [1, 2, 3];

class App extends Component {
  constructor(props) {
    super(props);
    this.getNext = this.getNext.bind(this);
    this.getPrevious = this.getPrevious.bind(this);
    this.state = {
      current: 0
    }
  }

  getNext() {
    const { current } = this.state;
    let next = current;
    if (next === ids.length - 1) {
      next = 0;
    } else {
      next++;
    }
    this.setState({ current: next });
  }

  getPrevious() {
    const { current } = this.state;
    let next = current;
    if (next === 0) {
      next = ids.length - 1;
    } else {
      next--;
    }
    this.setState({ current: next });
  }

  render() {
    const { current } = this.state;
    const id = ids[current];
    return (
      <div>
        <h1>My Pets</h1>
        <button onClick={() => this.getPrevious()}>
          Previous
        </button>
        <CustomPetName id={id} key={current}/>
        <button onClick={() => this.getNext()}>
          Next
        </button>
      </div>
    );
  }
}

export default App;
