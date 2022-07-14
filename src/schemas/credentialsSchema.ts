import joi from 'joi';

export const passSchema = joi.object({
    tipo: joi.valid("Credenciais").valid("Notas seguras").valid("Cartões").valid("Senhas de Wi-fi"),
    titulo: joi.string().required(),
    url: joi.string().required(),
    usuario:joi.string().required(),
    senha: joi.string().required()
})