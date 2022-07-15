import joi from 'joi';

export const wifisSchema = joi.object({
    titulo: joi.string().required(),
    nome: joi.string().required(),
    senha: joi.string().required()
})