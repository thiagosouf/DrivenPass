import joi from 'joi';

export const passSchema = joi.object({
    titulo: joi.string().required(),
    url: joi.string().required(),
    usuario:joi.string().required(),
    senha: joi.string().required()
})