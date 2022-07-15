import { client } from "../database.js";
import { CreateSignupData,CreateLoginData} from "../services/services.js"
import bcrypt from "bcrypt";
import Cryptr from "cryptr"

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
    url: string,
    usuario: string,
    senha: string
}

export interface Notes{
    titulo: string,
    nota: string
}

export interface Cards{
    titulo: string,
    numero: string,
    nome :string,
    cvc: string,
    expiracao:string,
    senha:string,
    virtual:boolean,
    tipo: string
}

export interface Wifis{
    titulo: string,
    nome:   string,
    senha:  string
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
    const {titulo, url, usuario, senha} = credentialData
    const userId = dados
    const encryptPassword = cryptr.encrypt(senha);
    return await client.credenciais.create({data:{
        userId:userId, titulo:titulo, url:url, usuario:usuario, senha:encryptPassword
    }})}

export async function findCredentialsByTnr(titulo:string, userId:number){
    return await client.credenciais.findFirst({
        where: {titulo, userId}
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
//createNote

export async function findNoteByTitulo(titulo:string, userId:number){
    return await client.notas.findFirst({
        where: {titulo,userId}
    })
}

export async function createNote(notesData:Notes ,userId:number){
    const {titulo, nota} = notesData
    return await client.notas.create({
        data:{
            userId,
            titulo,
            nota
        }
    })
}

export async function findAllNotes(userId:number){
    return await client.notas.findMany({
        where: {userId}
    })
}

export async function findNotesById(userId:number, id:number){
    return await client.notas.findFirst({
        where:{userId,id}
    })
    
}

export async function deleteNoteById(userId:number, id:number){
    const findNote = await findNotesById(userId,id)
        if(!findNote) return findNote
    const result = await client.notas.delete({
        where:{id}
    })
    return result
}

//card
export async function findCardByTitulo(titulo:string, userId:number){
    return await client.cartoes.findFirst({
        where: {titulo,userId}
    })
}

export async function createCard(cardsData:Cards ,userId:number){
    const {titulo,
            numero,
            nome  ,
            cvc   ,
            expiracao,
            senha ,
            virtual,
            tipo } = cardsData
    const encryptCvc = cryptr.encrypt(cvc);
    const encryptSenha = cryptr.encrypt(senha);
    return await client.cartoes.create({
        data:{
            userId,
            titulo,
            numero,
            nome  ,
            cvc:encryptCvc  ,
            expiracao,
            senha:encryptSenha ,
            virtual,
            tipo
        }
    })
}

export async function findAllCards(userId:number){
    const result = await client.cartoes.findMany({
        where: {userId}
    })
    if(!result) return result
    for(let i=0;i<result.length;i++){
        result[i].cvc = cryptr.decrypt(result[i].cvc)
        result[i].senha = cryptr.decrypt(result[i].senha);
    }
    return result
}

export async function findCardsById(userId:number, id:number){
    const result =  await client.cartoes.findFirst({
        where:{userId,id}
    })
    if(!result) return result
    result.senha = cryptr.decrypt(result.senha);
    result.cvc = cryptr.decrypt(result.cvc)
    return result  
}

export async function deleteCardById(userId:number, id:number){
    const findCard = await findCardsById(userId,id)
        if(!findCard) return findCard
    const result = await client.cartoes.delete({
        where:{id}
    })
    return result
}

//wifi

export async function findWifiByTitulo(titulo:string, userId:number){
    return await client.wifis.findFirst({
        where: {titulo,userId}
    })
}

export async function createWifi(wifisData:Wifis ,userId:number){
    const {titulo, nome, senha} = wifisData
    const encryptSenha = cryptr.encrypt(senha);
    return await client.wifis.create({
        data:{
            userId,
            titulo,
            nome,
            senha:encryptSenha
        }
    })
}

export async function findAllWifis(userId:number){
    const result = await client.wifis.findMany({
        where: {userId}
    })
    if(!result) return result
    for(let i=0;i<result.length;i++){
        result[i].senha = cryptr.decrypt(result[i].senha);
    }
    return result
}

export async function findWifisById(userId:number, id:number){
    const result = await client.wifis.findFirst({
        where:{userId,id}
    })
    result.senha = cryptr.decrypt(result.senha);
    return result
}

export async function deleteWifiById(userId:number, id:number){
    const findWifi = await findWifisById(userId,id)
        if(!findWifi) return findWifi
    const result = await client.wifis.delete({
        where:{id}
    })
    return result
}