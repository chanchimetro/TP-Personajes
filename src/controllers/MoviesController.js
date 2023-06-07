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

router.post('', async(req, res) => {
    try {
        let r = await MoviesServices.insert(req.body)
        console.log(r)
        res.status(200).json({message: 'Movie/Show inserted!'});
    } catch(error) {
        console.log(error)
        res.status(500).json({error: 'insert failed!'});
    }
});

router.put('', async(req, res) => {
    try {
        let r = await MoviesServices.update(req.body)
        console.log(r)
        res.status(200).json({message: 'Movie/Show updated!'});
    } catch(error) {
        console.log(error)
        res.status(500).json({error: 'update failed!'});
    }
});

router.delete('/:id', async(req, res) => {
    try {
        let r = await MoviesServices.insert(req.params.id)
        console.log(r)
        res.status(200).json({message: 'Movie/Show deleted!'});
    } catch(error) {
        console.log(error)
        res.status(500).json({error: 'delete failed!'});
    }
});

export default router;