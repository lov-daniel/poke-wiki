import { useNavigate } from "react-router";

const PokeCards = ({ pokemons, page, onNextPage, onPrevPage, disableNext }) => {
  const navigate = useNavigate();
  if (!pokemons || pokemons.length === 0)
    return <div>No cards to display.</div>;
  return (
    <>
      <section className="flex justify-center mb-4">
        <div className="w-screen flex flex-col items-center p-4">
          <div className="join mb-10">
            <button
              className="join-item btn"
              onClick={onPrevPage}
              disabled={page === 1}
            >
              «
            </button>
            <button className="join-item btn">Page {page}</button>
            <button
              className="join-item btn"
              onClick={onNextPage}
              disabled={disableNext}
            >
              »
            </button>
          </div>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
            {pokemons.map((card) => (
              <figure
                key={card.id}
                className=" card hover:scale-105 transition-transform duration-300 flex justify-center rounded-b-lg"
              >
                <img
                  src={card.images?.small}
                  alt={card.name}
                  className="w-full h-auto"
                  onClick={() => navigate(`/tcg/card/${card.id}`)}
                />
              </figure>
            ))}
          </div>
          <div className="join mt-10">
            <button
              className="join-item btn"
              onClick={onPrevPage}
              disabled={page === 1}
            >
              «
            </button>
            <button className="join-item btn">Page {page}</button>
            <button
              className="join-item btn"
              onClick={onNextPage}
              disabled={disableNext}
            >
              »
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PokeCards;
