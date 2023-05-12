import { Router } from 'express';
import CharServices from '../services/CharactersServices.js'
const router = Router();

router.get('', async(req, res) => {
    const characters = await CharServices.getAll();
    return res.status(200).json(characters);
});

export default router;