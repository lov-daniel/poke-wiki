// package imports
import express from "express";
import cors from "cors";

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
import TCGdex from "@tcgdex/sdk";

const tcgdex = new TCGdex("en");

app.get("/api/cards", async (req, res) => {
  try {
    const cards = await tcgdex.card.list();
    const cardToDisplay = cards.slice(0, 125);

    const detailedCards = await Promise.all(
      cardToDisplay.map(async (card) => {
        const fullCard = await tcgdex.card.get(card.id);
        return {
          id: fullCard.id,
          name: fullCard.name,
          image: fullCard.image,
          types: fullCard.types,
          rarity: fullCard.rarity,
          set: fullCard.set,
          description: fullCard.description,
          attacks: fullCard.attacks,
          weaknesses: fullCard.weaknesses,
          highQualityImage: fullCard.getImageURL("high", "png"), // Assuming getImageURL is a method that returns the image URL
          lowQualityImage: fullCard.getImageURL("low", "png"), // Assuming get
        };
      })
    );

    res.json(detailedCards);
  } catch (error) {
    console.error("Error fetching cards:", error);
    res.status(500).json({ error: "Failed to fetch cards" });
  }
});
