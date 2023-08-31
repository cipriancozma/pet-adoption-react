import { useState } from "react";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");

  const breeds = [];

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(location);
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
            disabled={breed.length === 0}
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
    </div>
  );
};

export default SearchParams;
