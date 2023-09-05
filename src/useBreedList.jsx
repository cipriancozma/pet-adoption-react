import { useQuery } from "@tanstack/react-query";
// import { useState, useEffect } from "react";
import fetchBreedList from "./fetchBreedList";

export default function useBreedList(animal) {
  const { data, status } = useQuery(["breeds", animal], fetchBreedList);

  return [data?.breeds ?? [], status];
}

// const localCache = {};

// export default function useBreedList(animal) {
// //   const [breedlist, setBreedList] = useState([]);
// //   const [status, setStatus] = useState("unloaded");

// //   useEffect(() => {
// //     if (!animal) {
// //       setBreedList([]);
// //     } else if (localCache[animal]) {
// //       setBreedList(localCache[animal]);
// //     } else {
// //       requestBreedList();
// //     }

// //     async function requestBreedList() {
// //       setBreedList([]);
// //       setStatus("loading");

// //       const res = await fetch(
// //         `https://pets-v2.dev-apis.com/breeds?animal=${animal}`,
// //       );
// //       const json = await res.json();

// //       localCache[animal] = json.breeds || [];
// //       setBreedList(localCache[animal]);
// //       setStatus("loaded");
// //     }
// //   }, [animal]);

//   return [results, status];
// }
