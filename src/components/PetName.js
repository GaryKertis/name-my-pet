
function PetName({pet, name}) {
  console.log(`${name}-${pet}-PetName.render`);
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
