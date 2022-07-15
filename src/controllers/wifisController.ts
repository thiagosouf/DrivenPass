import { Request, Response } from "express";
import { createWifisService, findAllWifisService, findWifisById, deleteWifiById } from "../services/wifiService.js"

export async function createWifi (req:Request,res:Response){
    const token = req.headers.authorization;
    const result = await createWifisService(req.body, token)
    res.status(200).send(result)
}

export async function listWifi (req:Request,res:Response){
    const token = req.headers.authorization;
    const result = await findAllWifisService(token)
    res.status(200).send(result)
}

export async function listWifiById (req:Request,res:Response){
    const idWifi = parseInt(req.params.id)
    const token = req.headers.authorization;
    const result = await findWifisById(idWifi, token) 
    res.status(200).send(result)
}

export async function deleteWifi (req:Request,res:Response){
    const idWifi = parseInt(req.params.id)
    const token = req.headers.authorization;
    const result = await deleteWifiById(idWifi, token) 
    res.status(200).send(result)
}