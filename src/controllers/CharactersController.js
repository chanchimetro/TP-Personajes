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
        await CharServices.insert(req.body)
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

router.get('/:id', async(req, res) => {
    const r = await CharServices.getCharInfo(req.params.id)
    console.log(res);
    return res.status(200).json(r);
});

router.get('?name', async(req, res) => {
    const r = await CharServices.getCharByName(req.query.name)
    console.log(res);
    return res.status(200).json(r);
});

export default router;