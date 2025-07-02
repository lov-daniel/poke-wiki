import { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target.form || e.target;
    const input = form.elements.search;
    const pokemonName = input.value.trim().toLowerCase();
    if (pokemonName) {
      navigate(`/tcg/cards/${pokemonName}`);
    }
  };

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm flex flex-wrap z-10">
        <div className="flex-1">
          <div className="flex flex-wrap">
            <Link className="btn btn-ghost text-2xl" to="/">
              Poké Stop
            </Link>
            <section className="flex flex-row justify-center mb-4">
              <div className="join">
                <form className="join flex flex-row" onSubmit={handleSearch}>
                  <input
                    type="text"
                    name="search"
                    placeholder="Search"
                    className="input input-bordered mb-2 join-item rounded-r-none"
                    onKeyDown={(e) => {
                      const pokemonName = e.target.value.trim().toLowerCase();
                      if (e.key === "Enter" && pokemonName) {
                        e.preventDefault();
                        navigate(`/tcg/cards/${pokemonName}`);
                      }
                    }}
                  />
                  <select className="rounded-none select join-item">
                    <option>In TCG</option>
                    <option>In Games</option>
                  </select>
                  <button
                    className="join-item btn btn-primary rounded-l-none"
                    aria-label="Search Trading Cards"
                    type="submit"
                  >
                    &rarr;
                  </button>{" "}
                </form>
              </div>
            </section>
          </div>
        </div>
        {/* Hamburger for mobile */}
        <div className="flex-none md:hidden">
          <button
            className="btn btn-square btn-ghost"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {/* Desktop menu */}
        <div className="flex-none hidden md:block z-10">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>Pokémon</summary>

                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <Link to="/pokemon">All Pokémon</Link>
                  </li>
                  <li>
                    <Link to="/pokemon/generation">Pokémon by Generation</Link>
                  </li>
                  <li>
                    <Link to="/pokemon/type">Pokémon by Type</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Trading Cards</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <Link to="/tcg/cards">All Cards</Link>
                  </li>
                  <li>
                    <Link to="/cards/sets">Cards by Sets</Link>
                  </li>
                  <li>
                    <Link to="/cards/rarity">Cards by Rarity</Link>
                  </li>
                  <li>
                    <Link to="/cards/type">Cards by Type</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/faq">FAQs</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-base-100 shadow px-4 py-2">
          <ul className="menu menu-vertical">
            <li>
              <details>
                <summary>Pokémon</summary>
                <ul>
                  <li>
                    <Link to="/pokemon" onClick={() => setMenuOpen(false)}>
                      All Pokémon
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/pokemon/generation"
                      onClick={() => setMenuOpen(false)}
                    >
                      Pokémon by Generation
                    </Link>
                  </li>
                  <li>
                    <Link to="/pokemon/type" onClick={() => setMenuOpen(false)}>
                      Pokémon by Type
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Trading Cards</summary>
                <ul>
                  <li>
                    <Link to="/tcg/cards" onClick={() => setMenuOpen(false)}>
                      All Cards
                    </Link>
                  </li>
                  <li>
                    <Link to="/cards/sets" onClick={() => setMenuOpen(false)}>
                      Cards by Sets
                    </Link>
                  </li>
                  <li>
                    <Link to="/cards/rarity" onClick={() => setMenuOpen(false)}>
                      Cards by Rarity
                    </Link>
                  </li>
                  <li>
                    <Link to="/cards/type" onClick={() => setMenuOpen(false)}>
                      Cards by Type
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/faq" onClick={() => setMenuOpen(false)}>
                FAQs
              </Link>
            </li>
          </ul>
        </div>
      )}
      <Outlet />
    </>
  );
};

export default NavBar;
