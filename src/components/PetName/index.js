
function PetName({pet, name}) {
  return (
    <div className="pet_name">
        <img src={`/${pet}.jpg`} alt={pet} />
        <p>
          {name} 
        </p>
    </div>
  );
}

export default PetName;
