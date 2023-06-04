import { Router } from 'express';
import MoviesServices from '../services/MoviesServices.js'
const router = Router();

router.get('', async(req, res) => {
    const movies = await MoviesServices.getAll();
    console.log(res);
    return res.status(200).json(movies);
});

router.get('/:id', async(req, res) => {
    const movie = await MoviesServices.getMovieInfo(req.params.id);
    console.log(res);
    return res.status(200).json(movie);
});

export default router;