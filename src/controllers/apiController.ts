import { Request, Response } from 'express';
import {sendName} from './helperController';
import { Sequelize } from 'sequelize';
import { Phrases, PhrasesInstance } from '../models/Phrases';



export function ping(req: Request, res: Response){
    res.json({'pong': true});
}

export function random(req: Request, res: Response){
    res.json({number: Math.floor(Math.random() * 10)});
}

export function name(req: Request, res: Response){
    console.log(req.params.nome)
    res.json({'nome': sendName(req.params.name as string)});
}

export async function insertNewPhrase(req: Request, res: Response){
    let {author, txt} = req.params;
    let newPhrase = await Phrases.create({
        author, txt
    });
    res.status(201);
    res.json({newPhrase});
}

export async function listAllPhrases(req: Request, res: Response){
    const result = await Phrases.findAll({});
    res.json(result);
}

export async function listPhrase(req: Request, res: Response){    
    const resultPhrase = await Phrases.findByPk(req.params.id);
    if(resultPhrase){
        res.json(resultPhrase);
    }res.json({});
}

export async function updatePhrase(req: Request, res: Response){
    const resultPhrase = await Phrases.findByPk(req.params.id);
    if(resultPhrase){
        if(req.body.author.length > 0){
            resultPhrase.author = req.body.author;
        }
        if(req.body.txt){
            resultPhrase.txt = req.body.txt;
        }                
        await resultPhrase.save();
        res.json({resultPhrase});
    }
    res.json({});
}

export async function deletePhrase(req: Request, res: Response){
    const result = await Phrases.findByPk(req.params.id);
    if(result){
        await result.destroy();
        res.json({
            'messagem': 'deletado com sucesso!'
        });
    }
    res.json({});
}

export async function randomPhrase(req: Request, res: Response){    
    const phrase = await Phrases.findOne({
        order: [Sequelize.fn('RAND')]
    });
    res.json({ phrase });
    
    
}