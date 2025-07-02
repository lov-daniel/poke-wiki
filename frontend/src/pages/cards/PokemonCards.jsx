import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  fetchFromPokemonTcgAPI,
  fetchAllPokemonTcgCards,
} from "../../service/tcgApiRoutes";
import PokeCards from "../../components/pokeCards";

const PokemonCards = () => {
  const { name } = useParams();
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchCards = async () => {
      setLoading(true);
      setError("");
      try {
        let data;
        if (name) {
          data = await fetchFromPokemonTcgAPI(`name:${name}`, page);
        } else {
          data = await fetchAllPokemonTcgCards(page);
        }
        setCards(data || []);
      } catch (err) {
        setError("Failed to fetch Pokémon cards");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, [name, page]);

  if (loading) return <div>Loading Pokémon cards...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="w-screen flex flex-col items-center p-4">
      <PokeCards
        pokemons={cards}
        page={page}
        onNextPage={() => setPage((p) => p + 1)}
        onPrevPage={() => setPage((p) => Math.max(1, p - 1))}
        disableNext={cards.length < 25}
      />
      {cards.length === 0 && <div>No cards found for this Pokémon.</div>}
      <Link to="/tcg/cards">
        <button className="back-button bg-amber-500">Back to Home</button>
      </Link>
    </div>
  );
};

export default PokemonCards;
