import { Request, Response } from "express";
import { unprocessableError } from "../utils/errorUtils.js";
import {testeService} from "../services/services.js"


export function signupController(req:Request,res:Response){
    const{email, password, confirmPassword} = req.body

    console.log(password)
    console.log(confirmPassword)

    
    testeService(password)
    
    res.status(200).send("signup")

}

export function loginController(req:Request,res:Response) {
    res.status(200).send("login")
}