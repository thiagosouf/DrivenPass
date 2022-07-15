import joi from 'joi';

export const cardsSchema = joi.object({
    titulo: joi.string().required(),
    numero: joi.string().required(),
    nome: joi.string().required(),
    cvc: joi.string().required(),
    expiracao: joi.string().required(),
    senha: joi.string().required(),
    virtual: joi.boolean(),
    tipo: joi.string().required()
})