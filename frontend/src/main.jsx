import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./index.css";

// pages
import Landing from "./pages/Landing.jsx";
import App from "./App.jsx";
import NavBar from "./components/NavBar.jsx";

{
  /* Pokedex pages */
}
import Pokemon from "./pages/pokedex/Pokemon.jsx";
import PokemonGeneration from "./pages/pokedex/PokemonGeneration.jsx";
import PokemonType from "./pages/pokedex/PokemonType.jsx";

{
  /* TCG pages */
}
import PokemonCards from "./pages/cards/PokemonCards.jsx";
import PokemonCardSets from "./pages/cards/PokemonCardSets.jsx";
import PokemonCardsRarity from "./pages/cards/PokemonCardsRarity.jsx";
import PokemonCardsType from "./pages/cards/PokemonCardsType.jsx";
import PokemonCardInfo from "./pages/cards/PokemonCardInfo.jsx";

{
  /* Other pages */
}
import About from "./pages/About.jsx";
import Faq from "./pages/Faq.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Landing />} />
          <Route path="home" element={<App />} />
          <Route path="pokemon" element={<Pokemon />} />
          <Route path="pokemon/generation" element={<PokemonGeneration />} />
          <Route path="pokemon/type" element={<PokemonType />} />

          <Route path="tcg/cards" element={<PokemonCards />} />
          <Route path="tcg/cards/:name" element={<PokemonCards />} />
          <Route path="tcg/card/:id" element={<PokemonCardInfo />} />

          <Route path="cards/sets" element={<PokemonCardSets />} />
          <Route path="cards/rarity" element={<PokemonCardsRarity />} />
          <Route path="cards/type" element={<PokemonCardsType />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<Faq />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
