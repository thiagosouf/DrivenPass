import { Request, Response } from "express";
// createPass, listPass, listPassById, deletePass

export function createPass (req:Request,res:Response){
    res.status(200).send("createPass")
}

export function listPass (req:Request,res:Response){
    res.status(200).send("listPass")
}

export function listPassById (req:Request,res:Response){
    res.status(200).send("listPassById")
}

export function deletePass (req:Request,res:Response){
    res.status(200).send("deletePass")
}