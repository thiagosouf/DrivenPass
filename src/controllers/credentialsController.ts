import { Request, Response } from "express";
import { createCredentialsService,findAllCredentialsService, findCredentialById, deleteCredentialById } from "../services/credentialService.js"
 
export async function createPass (req:Request,res:Response){
    const token = req.headers.authorization;
    const result = await createCredentialsService(req.body, token)
    res.status(200).send(result)
}

export async function listPass (req:Request,res:Response){
    const token = req.headers.authorization;
    const result = await findAllCredentialsService(token)
    res.status(200).send(result)
}

export async function listPassById (req:Request,res:Response){
    const idPass = parseInt(req.params.id)
    const token = req.headers.authorization;
    const result = await findCredentialById(idPass, token) 
    res.status(200).send(result)
}

export async function deletePass (req:Request,res:Response){
    const idPass = parseInt(req.params.id)
    const token = req.headers.authorization;
    const result = await deleteCredentialById(idPass, token) 
    res.status(200).send(result)
}
