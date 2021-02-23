import CustomPetName from './components/CustomPetName';

function App() {
  return (
    <div>
      <h1>My Pets</h1>
      <CustomPetName pet={"baboon"} />
      <CustomPetName pet={"bobcat"} />
      <CustomPetName pet={"bernie"} />
    </div>
  );
}

export default App;
