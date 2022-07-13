import { Prisma } from "@prisma/client";
import { client } from "../database.js";
import { CreateSignupData,CreateLoginData} from "../services/services.js"
import bcrypt from "bcrypt";

export interface UserRepository{
    id: number,
    email: string,
    password: string
    confirmPassword: string
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
    console.log(validPass)
    return validPass
}