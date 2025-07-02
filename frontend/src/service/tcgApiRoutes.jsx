export const fetchAllPokemonTcgCards = async (page = 1) => {
  const response = await fetch(`/api/tcg/cards?page=${page}`);
  if (!response.ok) throw new Error("Network response was not ok");
  return await response.json();
};

export const fetchFromPokemonTcgAPI = async (query, page = 1) => {
  const response = await fetch(
    `/api/tcg/cards?q=${encodeURIComponent(query)}&page=${page}`
  );
  if (!response.ok) throw new Error("Network response was not ok");
  return await response.json();
};
