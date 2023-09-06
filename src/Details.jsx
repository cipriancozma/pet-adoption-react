import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import fetchPets from "./fetchPet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

const Details = () => {
  const { id } = useParams();
  const { isLoading, data, isError } = useQuery(["details", id], fetchPets);

  if (isError) {
    console.error("Failed to fetch");
  }

  if (isLoading) {
    return (
      <div className="loading-pane">
        <h2>Loading...</h2>
      </div>
    );
  }

  const pet = data?.pets[0];

  const { name, animal, breed, city, state, description, images } = pet;
  return (
    <div className="details">
      <Carousel images={images} />
      <div>
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {city}, {state}
        </h2>
        <button>Adopt {name}</button>
        <p>{description}</p>
      </div>
    </div>
  );
};

function DetailsErrorBoundary() {
  return (
    <ErrorBoundary>
      <Details />
    </ErrorBoundary>
  );
}

export default DetailsErrorBoundary;
