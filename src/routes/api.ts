import { Router, Request, Response } from 'express';
import * as apiController from '../controllers/apiController';

const router = Router();

router.get('/ping', apiController.ping);

router.get('/random', apiController.random);

router.get('/user/:name', apiController.name);

router.post('/newPhrase/:author/:txt', apiController.insertNewPhrase);

router.get('/listAllPhrases', apiController.listAllPhrases);

router.get('/listPhrase/:id', apiController.listPhrase);

router.put('/updateInfo/:id', apiController.updatePhrase);

router.delete('/deletePhrase/:id', apiController.deletePhrase);

router.get('/randomPhrase', apiController.randomPhrase);

export default router;