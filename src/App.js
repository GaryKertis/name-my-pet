import React, { Component } from 'react';
import CustomPetName from './components/CustomPetName';

const ids = [1, 2, 3];
const petNames = ids.map((value, key) => (<CustomPetName id={value} key={key}/>));

function App() {
  return (
    <div>
      <h1>My Pets</h1>
      {petNames}
    </div>
  );
}

export default App;
