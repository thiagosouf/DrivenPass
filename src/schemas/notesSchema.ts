import joi from 'joi';

export const notesSchema = joi.object({
    titulo: joi.string().max(50).required(),
    nota: joi.string().max(1000).required()
})