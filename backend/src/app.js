// package imports
import express, { Router } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// lets us set a port, falls back to 4000
let port = process.env.PORT || 4000;

// Middleware
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5174", // Adjust this to your frontend's URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

//routes
const router = Router();

//TCG API routes
router.get("/tcg/cards", async (req, res) => {
  try {
    const page = req.query.page || 1;
    let url = `${process.env.POKEMON_TCG_API_URL}/cards?pageSize=25&page=${page}`;
    if (req.query.q) {
      url += `&q=${encodeURIComponent(req.query.q)}`;
    }
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": process.env.POKEMON_TCG_API_KEY,
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    res.json(data.data); // Only send the array of cards
  } catch (error) {
    console.error("Error fetching Pokémon TCG cards:", error);
    res.status(500).json({ error: "Failed to fetch Pokémon cards" });
  }
});

// Endpoint to fetch a specific Pokémon TCG card by ID
router.get("/tcg/card/:id", async (req, res) => {
  try {
    const url = `${process.env.POKEMON_TCG_API_URL}/cards/${req.params.id}`;
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": process.env.POKEMON_TCG_API_KEY,
      },
    });
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    res.json(data.data); // TCG API returns { data: { ...card } }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch card" });
  }
});
app.use("/api", router);
