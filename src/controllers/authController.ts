import { Request, Response } from "express";
import { unprocessableError } from "../utils/errorUtils.js";
import {testeService} from "../services/services.js"


export async function signupController(req:Request,res:Response){
    const{email, password, confirmPassword} = req.body

    console.log(password)
    console.log(confirmPassword)

    
    const result = await testeService(password, email)
    
    res.send(result)
}

export function loginController(req:Request,res:Response) {
    res.status(200).send("login")
}