import { Request, Response } from "express";
import { createCardsService,
        findAllCardsService,
        findCardsById,
         deleteCardById
         } from "../services/cardService.js"

export async function createCard (req:Request,res:Response){
    const token = req.headers.authorization;
    const result = await createCardsService(req.body, token)
    res.status(200).send(result)
}

export async function listCard (req:Request,res:Response){
    const token = req.headers.authorization;
    const result = await findAllCardsService(token)
    res.status(200).send(result)
}

export async function listCardById (req:Request,res:Response){
    const idCard = parseInt(req.params.id)
    const token = req.headers.authorization;
    const result = await findCardsById(idCard, token) 
    res.status(200).send(result)
}

export async function deleteCard (req:Request,res:Response){
    const idCard = parseInt(req.params.id)
    const token = req.headers.authorization;
    const result = await deleteCardById(idCard, token) 
    res.status(200).send(result)
}