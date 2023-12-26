import { Exclude } from "class-transformer";

export interface User{
    id:number,
    username:string;
    password:string;
}

export class SerializeUser{
    id:number;
    username:string;

    @Exclude()
    password:string;

    constructor(patial:Partial<SerializeUser>){
        Object.assign(this,patial);

    }
}