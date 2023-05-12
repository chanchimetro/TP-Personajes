import express from 'express';
import cors from 'cors';
import CharacterRouter from './src/controllers/CharactersController.js'

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use('/characters', CharacterRouter);

app.listen(port, () => {
    console.log(`Escuchando al puerto ${port}`)
});