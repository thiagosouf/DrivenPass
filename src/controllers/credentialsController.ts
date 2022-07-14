import { Request, Response } from "express";
import { createCredentialsService,findAllCredentialsService, findCredentialById, deleteCredentialById } from "../services/services.js";
// createPass, listPass, listPassById, deletePass

export async function createPass (req:Request,res:Response){
    const {titulo, nome, rotulo, url, username, password} = req.body
    const token = req.headers.authorization;
    // const chave = process.env.SECRET;
    const result = await createCredentialsService(req.body, token)
    console.log(result)
    res.status(200).send("createPass")
}

export async function listPass (req:Request,res:Response){
    const token = req.headers.authorization;
    const result = await findAllCredentialsService(token)
    res.status(200).send(result)
}

export async function listPassById (req:Request,res:Response){
    const idPass = parseInt(req.params.id)
    console.log(idPass)
    const token = req.headers.authorization;
    const result = await findCredentialById(idPass, token) 
    res.status(200).send(result)
}

export async function deletePass (req:Request,res:Response){
    const idPass = parseInt(req.params.id)
    console.log(idPass)
    const token = req.headers.authorization;
    const result = await deleteCredentialById(idPass, token) 
    res.status(200).send("deletePass")
}