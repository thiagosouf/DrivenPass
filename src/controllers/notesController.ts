import { Request, Response } from "express";
import { createNotesService, findAllNotesService, findNotesById, deleteNoteById } from "../services/noteService.js"

export async function createNote (req:Request,res:Response){
    const token = req.headers.authorization;
    const result = await createNotesService(req.body, token)
    res.status(200).send(result)
}

export async function listNote (req:Request,res:Response){
    const token = req.headers.authorization;
    const result = await findAllNotesService(token)
    res.status(201).send(result)
}

export async function listNoteById (req:Request,res:Response){
    const idNote = parseInt(req.params.id)
    const token = req.headers.authorization;
    const result = await findNotesById(idNote, token) 
    res.status(200).send(result)
}

export async function deleteNote (req:Request,res:Response){
    const idNote = parseInt(req.params.id)
    const token = req.headers.authorization;
    const result = await deleteNoteById(idNote, token) 
    res.status(200).send(result) 
}