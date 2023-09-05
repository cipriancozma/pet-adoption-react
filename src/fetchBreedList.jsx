const fetchBreedList = async ({ queryKey }) => {
  let animal = queryKey[1];

  const apiResponse = await fetch(
    `https://pets-v2.dev-apis.com/breeds?animal=${animal}`,
  );
  if (!apiResponse.ok) {
    throw new Error(`breeds/${animal} fetch not okay`);
  }

  return apiResponse.json();
};

export default fetchBreedList;
