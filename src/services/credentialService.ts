import { conflictError, notFoundError, unauthorizedError, unprocessableError } from "../utils/errorUtils.js";
import * as repo from "../repositories/repositorio.js"
import validToken from "../utils/utils.js"

export async function createCredentialsService(credentialData:repo.Credential, token:string){
    const userId = validToken(token)
    const findCredential = await repo.findCredentialsByTnr(credentialData.titulo, userId)
    if (findCredential)
        throw conflictError()
    const addCredential = await repo.createCredentials(credentialData, userId)
    return addCredential
}

export async function findAllCredentialsService(token:string){
    const userId = validToken(token)
    const findAll = await repo.findAllCredentials(userId)
    if (!findAll)
        throw notFoundError()
    return findAll
   
}

export async function findCredentialById(idPass:number, token:string) {
    const userId = validToken(token)
    const findPass = await repo.findCredentialById(userId, idPass)
    if (!findPass)
        throw notFoundError()
    return findPass
}

export async function deleteCredentialById(idPass:number, token:string){
    const userId = validToken(token)
    const deletePass = await repo.deleteCredentialById(userId, idPass)
    if(!deletePass)
        throw notFoundError()
    return deletePass
}