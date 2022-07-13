import { Request, Response } from "express";
import { unprocessableError } from "../utils/errorUtils.js";
import {testeService, signupService, loginService} from "../services/services.js"



export async function signupController(req:Request,res:Response){
    const{email, password, confirmPassword} = req.body

    console.log(password)
    console.log(confirmPassword)
    // const result = await testeService(password, email)
    const result = await signupService(req.body) 

    res.send(result)
}

export async function loginController(req:Request,res:Response) {
    const {email, password} = req.body

    const result = await loginService(req.body)

    res.send(result)

}

//const validPass = await bcrypt.compare(password, user.password);
