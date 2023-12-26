import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export class ValidateCustomerMiddleware implements NestMiddleware
{
    use(req: Request, res:Response , next:NextFunction)
    {
        console.log("Hellow World im inside the validate customer ")
        const {authorization}=req.headers;
        if(!authorization){
            res.status(403).send({message:"Authorizarion Not Provided"})
        }
        if(authorization==='123'){
            next();
        }else{
            res.status(403).send({message:"Invalid Authorizarion Token Provided"})
        }
      
    }

}