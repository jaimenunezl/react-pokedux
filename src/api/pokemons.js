export const getPokemons = async () => {
  const response = await fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'
  );

  const json = await response.json();

  return json.results;
};

export const getPokemon = async (name) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
  return response.json();
};
