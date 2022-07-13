import { Prisma } from "@prisma/client";
import { client } from "../database.js";

export interface userRepository{
    id: number,
    email: string,
    password: string
}

export async function findUserByEmail(email:string){
    return await client.users.findUnique({
        where: {email}
    })
}