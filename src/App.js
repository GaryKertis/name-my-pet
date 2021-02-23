import PetName from './components/PetName';

function App() {
  return (
    <div>
      <h1>My Pets</h1>
      <PetName name={"Babs"} pet={"baboon"} />
      <PetName name={"Bob"} pet={"bobcat"} />
      <PetName name={"Bernie"} pet={"bernie"} />
    </div>
  );
}

export default App;
