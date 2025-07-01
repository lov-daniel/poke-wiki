import React, { useEffect, useState } from "react";

const PokemonCards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/cards")
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => {
        console.error("Error fetching cards:", error);
      });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Pokémon Cards</h2>
      <div className="flex flex-wrap gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="card bg-base-100 shadow-xl flex items-center justify-center"
          >
            <figure>
              <source srcSet={card.lowQualityImage} type="image/webp" />

              <img
                src={card.highQualityImage || card.lowQualityImage}
                alt={card.name?.en || card.name}
                className="w-fit h-48 object-contain"
              />
            </figure>
            {/* <div className="card-body">
              <h3 className="card-title">{card.name?.en || card.name}</h3>
              <p className="text-sm text-gray-500 mb-2">
                <span className="font-semibold">ID:</span> {card.id}
              </p>
              <p>
                <span className="font-semibold">Types:</span>{" "}
                {card.types?.join(", ")}
              </p>
              <p>
                <span className="font-semibold">Rarity:</span> {card.rarity}
              </p>
              <p>
                <span className="font-semibold">Set:</span> {card.set?.name}
              </p>
              <p>
                <span className="font-semibold">Description:</span>{" "}
                {card.description}
              </p>
              <div>
                <span className="font-semibold">Attacks:</span>
                <ul className="list-disc list-inside">
                  {card.attacks?.map((atk, i) => (
                    <li key={i}>
                      <span className="font-semibold">{atk.name}:</span>{" "}
                      {atk.effect} {atk.damage && `| Damage: ${atk.damage}`}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="font-semibold">Weaknesses:</span>
                <ul className="list-disc list-inside">
                  {card.weaknesses?.map((w, i) => (
                    <li key={i}>
                      {w.type} {w.value}
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonCards;
