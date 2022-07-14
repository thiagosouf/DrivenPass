import {Router} from "express";
import {createNote, listNote, listNoteById, deleteNote} from "../controllers/notesController.js"
import { validateSchema } from '../middlewares/validateSchema.js';
import {notesSchema} from "../schemas/notesSchema.js"

const notesRouter = Router();

notesRouter.post("/createNote",validateSchema(notesSchema), createNote)
// notesRouter.get("/listNote", listNote);
// notesRouter.get("/listNote/:id", listNoteById);
// notesRouter.delete("/deleteNote/:id", deleteNote)

export default notesRouter;