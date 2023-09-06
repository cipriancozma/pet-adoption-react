async function fetchSearch({ queryKey }) {
  const { animal, location, breed } = queryKey[1];

  const response = await fetch(
    `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`,
  );

  if (!response.ok) {
    throw new Error(`Search not okay ${animal}, ${location}, ${breed}`);
  }

  return response.json();
}

export default fetchSearch;
