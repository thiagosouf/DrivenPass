import { conflictError } from "../utils/errorUtils.js";

export function testeService(password:string){
    if(password.length<=3){
        throw conflictError("O password tem que ter pelo menos 4 digitos");
    }
} 