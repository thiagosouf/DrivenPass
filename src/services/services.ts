import jwt from "jsonwebtoken";
import { client } from "../database.js";
import { conflictError, notFoundError, unauthorizedError, unprocessableError } from "../utils/errorUtils.js";
import * as repo from "../repositories/repositorio.js"


export type CreateSignupData = Omit<repo.UserRepository, "confirmPassword">;
export type CreateLoginData = Omit<repo.UserRepository, "confirmPassword" | "id">;


export async function testeService(password:string, email: string){
    const usuarios = await repo.findUserByEmail(email);
    console.log(usuarios)
    if (!usuarios)
        throw notFoundError()
}

export async function signupService(signupData: CreateSignupData) {
    const usuarioCadastrado = await repo.findUserByEmail(signupData.email)
    if (usuarioCadastrado)
        throw conflictError()
    console.log(signupData)
    const cadastro = await repo.createUser(signupData)
    
}

export async function loginService(loginData:CreateLoginData){
    const loginUsuario = await repo.findUserByEmail(loginData.email)
    if (!loginUsuario)
        throw notFoundError()
    const check = await repo.checkLogin(loginData.password, loginUsuario.password)
    console.log(check)
    if (!check)
        throw unauthorizedError()
    const token = jwt.sign({ userId: loginUsuario.id }, process.env.SECRET);
    return token
}


















































































