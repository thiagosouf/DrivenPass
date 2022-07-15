import { conflictError, notFoundError, unauthorizedError, unprocessableError } from "../utils/errorUtils.js";
import * as repo from "../repositories/repositorio.js"
import validToken from "../utils/utils.js"

export async function createNotesService(notesData:repo.Notes, token:string){
    const userId = validToken(token)
    const findNote = await repo.findNoteByTitulo(notesData.titulo,userId)                                 
    if(findNote)
        throw conflictError()
    const addNote = await repo.createNote(notesData, userId)
    if(!addNote)
        throw unprocessableError()
    return addNote
}

export async function findAllNotesService(token:string){
    const userId = validToken(token) 
    const findAll = await repo.findAllNotes(userId)
    if(!findAll)
        throw notFoundError()
    return findAll
}

export async function findNotesById(idNote:number, token:string){
    const userId = validToken(token)
    const findNotes = await repo.findNotesById(userId, idNote)
    if(!findNotes)
        throw notFoundError()
    return findNotes
}

export async function deleteNoteById(idNote:number, token:string){
    const userId = validToken(token)
    const deleteNote = await repo.deleteNoteById(userId, idNote) 
    if(!deleteNote)
        throw notFoundError()
    return deleteNote
}