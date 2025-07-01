// package imports
import express from 'express';

const app = express();

// lets us set a port, falls back to 4000
let port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
});