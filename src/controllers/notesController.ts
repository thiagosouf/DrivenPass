import { Request, Response } from "express";
import { createNotesService } from "../services/services.js";
// createNote, listNote, listNoteById, deleteNote

export async function createNote (req:Request,res:Response){
    const {titulo, nota} = req.body
    const token = req.headers.authorization;
    // const chave = process.env.SECRET;
    const result = await createNotesService(req.body, token)
    console.log(result)
    res.status(200).send("createNote")
}

// export async function listNote (req:Request,res:Response){
//     const token = req.headers.authorization;
//     const result = await findAllCredentialsService(token)
//     res.status(200).send(result)
// }

// export async function listNoteById (req:Request,res:Response){
//     const idPass = parseInt(req.params.id)
//     console.log(idPass)
//     const token = req.headers.authorization;
//     const result = await findCredentialById(idPass, token) 
//     res.status(200).send(result)
// }

// export async function deleteNote (req:Request,res:Response){
//     const idPass = parseInt(req.params.id)
//     console.log(idPass)
//     const token = req.headers.authorization;
//     const result = await deleteCredentialById(idPass, token) 
//     res.status(200).send("deleteNote")
// }