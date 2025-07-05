// package imports
import express, { Router } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// route imports
import pokedexRoutes from './routes/pokedexRoutes.js'
import tcgRoutes from './routes/tcgRoutes.js'

// lets us set a port, falls back to 4000
let port = process.env.PORT || 4000;

// Middleware
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173", // Adjust this to your frontend's URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use('/pokedex', pokedexRoutes);
app.use("/api", tcgRoutes);

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
