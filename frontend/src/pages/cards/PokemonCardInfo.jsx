import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const PokemonCardInfo = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCard = async () => {
      const res = await fetch(`/api/tcg/card/${id}`);
      const data = await res.json();
      console.log("Fetched card data:", data);
      setCard(data);
      setLoading(false);
    };
    fetchCard();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!card) return <div>Card not found</div>;

  const holofoilPrices = [
    ["Holofoil Market", card.tcgplayer?.prices?.holofoil?.market],
    ["Holofoil Low", card.tcgplayer?.prices?.holofoil?.low],
    ["Holofoil Mid", card.tcgplayer?.prices?.holofoil?.mid],
    ["Holofoil High", card.tcgplayer?.prices?.holofoil?.high],
  ];

  return (
    <>
      <Link to={`/tcg/cards/`}>&larr; Back to Card</Link>

      <div className="pokemon-card-info h-screen flex flex-col md:flex-row items-start justify-center gap-8 p-4">
        {/* Image: 1/3 on md+ screens */}
        <div className="w-full md:w-1/3 flex justify-center">
          <figure className="card hover:scale-105 transition-transform duration-300 p-5">
            <img src={card.images?.large} alt={card.name} className="" />
          </figure>
        </div>
        {/* Details: 2/3 on md+ screens */}
        <div className="w-full md:w-2/3 flex flex-col justify-center">
          <div className="header-details flex items-center justify-between mb-4">
            <div>
              <h1 className="font-bold">{card.name}</h1>
              <p>
                {card.supertype} - {card.subtypes?.join(", ")}
              </p>
            </div>
            <p>HP: {card.hp}</p>
          </div>
          <div className="prices-details">
            <h2 className="font-semibold">Prices</h2>
            {card.tcgplayer?.prices?.holofoil ? (
              <ul className="list-disc pl-5 flex flex-row gap-4 justify-evenly">
                {holofoilPrices.map(([label, price]) => (
                  <li
                    key={label}
                    className="flex flex-col justify-center items-center"
                  >
                    <h1>{label}</h1>
                    <p>{price ? `$${parseFloat(price).toFixed(2)}` : "N/A"}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No price data available.</p>
            )}
          </div>
          <div className="divider divider-primary"></div>
          {card.rules && (
            <div className="card-rules">
              <h1>Rules: </h1>
              <p className="">{card.rules?.join(", ")}</p>
            </div>
          )}
          {card.abilities && (
            <div className="card-abilities">
              <h1>Abilities: </h1>
              <ul className="list-disc pl-5">
                {card.abilities.map((ability, index) => (
                  <span key={index} className="flex flex-col">
                    {ability.type}
                    <li key={index}>
                      <strong>{ability.name}:</strong> {ability.text}
                    </li>
                  </span>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-4">
            <Link to={`/tcg/cards/${card.name.toLowerCase()}`} className="btn">
              View More Cards
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonCardInfo;
