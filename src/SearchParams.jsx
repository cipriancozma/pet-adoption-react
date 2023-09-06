import { useEffect, useState } from "react";
import useBreedList from "./useBreedList";
import PetResults from "./PetResults";
import { useQuery } from "@tanstack/react-query";
import fetchSearch from "./fetchSearch";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const [animal, setAnimal] = useState("dog");

  const [breeds] = useBreedList(animal);

  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];
  // useEffect(() => {
  //   fetchPets();
  // }, []);

  // async function fetchPets() {
  //   const response = await fetch(
  //     `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`,
  //   );
  //   const json = await response.json();
  //   setPets(json.pets);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = {
      animal: formData.get("animal") ?? "",
      breed: formData.get("breed") ?? "",
      location: formData.get("location") ?? "",
    };

    setRequestParams(obj);
  };

  return (
    <div className="search-params">
      <form onSubmit={handleSubmit}>
        <label htmlFor="location">
          Location
          <input id="location" placeholder="Location" name="location" />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
          >
            {ANIMALS.map((animal, id) => (
              <option key={id}>{animal}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select id="breed" name="breed">
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
