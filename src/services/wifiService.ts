import { conflictError, notFoundError, unauthorizedError, unprocessableError } from "../utils/errorUtils.js";
import * as repo from "../repositories/repositorio.js"
import validToken from "../utils/utils.js"

export async function createWifisService(wifisData:repo.Wifis, token:string){
    const userId = validToken(token)
    const findWifi = await repo.findWifiByTitulo(wifisData.titulo,userId)                                 
    if(findWifi)
        throw conflictError()
    const addWifi = await repo.createWifi(wifisData, userId)
    if(!addWifi)
        throw unprocessableError()
    return addWifi
}

export async function findAllWifisService(token:string){
    const userId = validToken(token)
    const findAll = await repo.findAllWifis(userId)
    if(!findAll)
        throw notFoundError()
    return findAll
}

export async function findWifisById(idWifi:number, token:string){
    const userId = validToken(token)
    const findWifis = await repo.findWifisById(userId, idWifi)
    if(!findWifis)
        throw notFoundError()
    return findWifis
}

export async function deleteWifiById(idWifi:number, token:string){
    const userId = validToken(token)
    const deleteWifi = await repo.deleteWifiById(userId, idWifi) 
    if(!deleteWifi)
        throw notFoundError()
    return deleteWifi
}