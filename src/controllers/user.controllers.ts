import { Request,Response } from "express"



export class  userControllers{
    getUser(req:Request,res:Response){
        res.status(200).json({
            user:"Nazareno"
        })

    }
}