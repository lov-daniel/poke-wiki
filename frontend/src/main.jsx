import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./index.css";

// pages
import Landing from "./pages/Landing.jsx";
import App from "./App.jsx";
import NavBar from "./components/NavBar.jsx";
import Pokemon from "./pages/Pokemon.jsx";
import PokemonGeneration from "./pages/PokemonGeneration.jsx";
import PokemonType from "./pages/PokemonType.jsx";
import PokemonCards from "./pages/PokemonCards.jsx";
import PokemonCardSets from "./pages/PokemonCardSets.jsx";
import PokemonCardsRarity from "./pages/PokemonCardsRarity.jsx";
import PokemonCardsType from "./pages/PokemonCardsType.jsx";
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
          <Route path="cards" element={<PokemonCards />} />
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
