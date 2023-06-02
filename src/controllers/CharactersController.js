import { Router } from 'express';
import CharServices from '../services/CharactersServices.js'
const router = Router();

router.get('', async(req, res) => {
    const characters = await CharServices.getAll();
    console.log(res);
    return res.status(200).json(characters);
});

router.post('', async(req, res) => {
    try {
        let r = await CharServices.insert(req.body)
        console.log(r)
        res.status(200).json({message: 'character inserted'});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'insert failed'});
    }
});

router.put('', async(req, res) => {
    try {
        await CharServices.update(req.body)
        res.status(200).json({message: 'character updated'});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'update failed'});
    }
});

router.delete('/:id', async(req, res) => {
    try {
        await CharServices.delete(req.params.id)
        res.status(200).json({message: 'character deleted'});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'delete failed'});
    }
});

router.get('/sbid/:id', async(req, res) => {
    const r = await CharServices.getCharInfo(req.params.id);
    console.log(res);
    return res.status(200).json(r);
});

router.get('/search', async(req, res) => {
    let r = null;
    console.log(req.query.name);
    if(typeof req.query.name !== 'undefined') {
        r = await CharServices.getCharByName(req.query.name);
    } else if (typeof req.query.age !== 'undefined') {
        r = await CharServices.getCharByAge(req.query.age);
    } else {
        r = await CharServices.getCharByIdMovie(req.query.idMovie);
    }
    console.log(res);
    return res.status(200).json(r);
});


export default router;