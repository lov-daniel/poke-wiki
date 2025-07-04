import { Router } from 'express'

const router = Router()

router.get('/', async (req, res) => {
    try {
        const response = await fetch(`${process.env.POKEDEX_API}/pokemon/`);

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        res.json(data.results);

    } catch (err) {
        console.error("error while fetching pokedex entry!", err);
        res.status(500).json({ error: "Failed to fetch Pokémon info" });
    }

});

router.get('/:id', async (req, res) => {
    try {
        const response = await fetch(`${process.env.POKEDEX_API}/pokemon/${req.params.id}`);

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        res.json(data);

    } catch (err) {
        console.error("error while fetching pokedex entry!", err);
        res.status(500).json({ error: "Failed to fetch Pokémon info" });
    }

});

export default router;