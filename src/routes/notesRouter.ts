import { Router } from "express";
import {
    createNote,
    listNote,
    listNoteById,
    deleteNote
} from "../controllers/notesController.js"
import { validateSchema } from '../middlewares/validateSchema.js';
import { notesSchema } from "../schemas/notesSchema.js"

const notesRouter = Router();

notesRouter.post("/createnote", validateSchema(notesSchema), createNote)
notesRouter.get("/listnote", listNote);
notesRouter.get("/listnote/:id", listNoteById);
notesRouter.delete("/deletenote/:id", deleteNote)

export default notesRouter; 