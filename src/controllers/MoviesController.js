import { Router } from 'express';
import MoviesServices from '../services/MoviesServices.js'
const router = Router();

router.get('', async(req, res) => {
    const movies = await MoviesServices.getAll();
    console.log(res);
    return res.status(200).json(movies);
});

export default router;