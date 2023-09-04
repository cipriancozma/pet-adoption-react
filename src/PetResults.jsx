import Pet from "./Pet";

const PetResults = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No pets found</h1>
      ) : (
        pets.map((pet) => <Pet {...pet} key={pet.id} />)
      )}
    </div>
  );
};

export default PetResults;
