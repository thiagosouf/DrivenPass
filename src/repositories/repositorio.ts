import { Prisma } from "@prisma/client";
import { client } from "../database.js";
import { CreateSignupData,CreateLoginData} from "../services/services.js"
import bcrypt from "bcrypt";
import Cryptr from "cryptr"
import { number } from "joi";
import { ResultBuilder } from "pg";

const cryptr = new Cryptr('myTotallySecretKey');

export interface UserRepository{
    id: number,
    email: string,
    password: string
    confirmPassword: string
}

export interface Credential{
    userId: number,
    titulo: string,
    nome: string,
    rotulo: string,
    url: string,
    username: string,
    password: string
}

export interface Notes{
    titulo: string,
    nota: string
}


export async function findUserByEmail(email:string){
    return await client.users.findUnique({
        where: {email}
    })
}

export async function createUser(signupData:CreateSignupData){
    const {email, password} = signupData
    const hash = await bcrypt.hash(password, 10);
    return await client.users.create({
        data:{
            email:email,
            password:hash
        }
         })
}

export async function checkLogin(loginData:string, loginBanco:string){
    const validPass = await bcrypt.compare(loginData, loginBanco);
    return validPass
}

export async function createCredentials(credentialData:Credential, dados:number){
    const {titulo, nome, rotulo, url, username, password} = credentialData
    const userId = dados
    const encryptPassword = cryptr.encrypt(password);
    return await client.credenciais.create({data:{
        userId:userId, titulo:titulo, nome:nome, rotulo:rotulo, url:url, usuario:username, senha:encryptPassword
    }})}

export async function findCredentialsByTnr(titulo:string, nome: string, rotulo: string, userId:number){
    return await client.credenciais.findFirst({
        where: {OR: [
            { titulo },
            { nome },
            { rotulo }
          ],
          AND: { userId }}
    })
}

export async function findAllCredentials(userId:number){
    const result = await client.credenciais.findMany({
        where: {userId}
    })
    if(!result) return result
    for(let i=0;i<result.length;i++){
        result[i].senha = cryptr.decrypt(result[i].senha);
    }

    return result
}

export async function findCredentialById(userId:number, id:number){
    const result = await client.credenciais.findFirst({
        where:{userId,id}
    })
    if(!result) return result
    console.log(result)
    result.senha = cryptr.decrypt(result.senha);
    return result
    }

export async function deleteCredentialById(userId:number, id:number){
    const findCredential = await findCredentialById(userId,id)
    if(!findCredential) return findCredential
    const result = await client.credenciais.delete({
        where:{id}
    })
    return result
}