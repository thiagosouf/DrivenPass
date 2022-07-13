import { conflictError, notFoundError } from "../utils/errorUtils.js";
import * as repo from "../repositories/repositorio.js"

export async function testeService(password:string, email: string){
    if(password.length<=3){
        throw conflictError("O password tem que ter pelo menos 4 digitos");
    }

    const usuarios = await repo.findUserByEmail(email);
    console.log(usuarios)
    if (!usuarios)
        throw notFoundError()
} 