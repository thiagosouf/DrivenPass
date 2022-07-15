import { conflictError, notFoundError, unauthorizedError, unprocessableError } from "../utils/errorUtils.js";
import * as repo from "../repositories/repositorio.js"
import validToken from "../utils/utils.js"

export async function createCardsService(cardsData:repo.Cards, token:string){
    const validarCartao = ((cardsData.tipo === "credito") || (cardsData.tipo === "debito") || (cardsData.tipo === "ambos"))
    if(!validarCartao)
        throw unprocessableError()
    const userId = validToken(token)
    const findCard = await repo.findCardByTitulo(cardsData.titulo,userId)                                 
    if(findCard)
        throw conflictError()
    const addcard = await repo.createCard(cardsData, userId)
    if(!addcard)
        throw unprocessableError()
    return addcard
}

export async function findAllCardsService(token:string){
    const userId = validToken(token)
    const findAll = await repo.findAllCards(userId)
    if(!findAll)
        throw notFoundError()
    return findAll
}

export async function findCardsById(idCard:number, token:string){
    const userId = validToken(token)
    const findCards = await repo.findCardsById(userId, idCard)
    if(!findCards)
        throw notFoundError()
    return findCards
}

export async function deleteCardById(idCard:number, token:string){
    const userId = validToken(token)
    const deleteCard = await repo.deleteCardById(userId, idCard) 
    if(!deleteCard)
        throw notFoundError()
    return deleteCard
}