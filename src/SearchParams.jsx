import { useEffect, useState } from "react";
import useBreedList from "./useBreedList";
import PetResults from "./PetResults";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("bird");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);

  const [breeds] = useBreedList(animal);

  useEffect(() => {
    fetchPets();
  }, []);

  async function fetchPets() {
    const response = await fetch(
      `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`,
    );
    const json = await response.json();
    setPets(json.pets);
  }

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPets();
  };

  return (
    <div className="search-params">
      <form onSubmit={handleSubmit}>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            {ANIMALS.map((animal, id) => (
              <option key={id}>{animal}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          >
            {breeds.map((breed, id) => (
              <option key={id}>{breed}</option>
            ))}
          </select>
        </label>
        <button
          type="submit"
          disabled={location.length < 3}
          style={{ opacity: location.length < 3 ? 0.2 : 1 }}
        >
          Submit
        </button>
      </form>
      <PetResults pets={pets} />
    </div>
  );
};

export default SearchParams;
