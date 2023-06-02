import express from 'express';
import cors from 'cors';
import CharacterRouter from './src/controllers/CharactersController.js'
import MoviesRouter from './src/controllers/MoviesController.js'

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use('/characters', CharacterRouter);
app.use('/movies', MoviesRouter)

app.listen(port, () => {
    console.log(`Escuchando al puerto ${port}`)
});