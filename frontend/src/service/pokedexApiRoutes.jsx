export const fetchPokemonById = async (id) => {
  const response = await fetch(`/api/pokedex/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch Pokémon details");
  }
  return response.json();
};
