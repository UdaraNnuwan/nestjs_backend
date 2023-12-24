import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializeUser, User } from 'src/users/types/User';

@Injectable()
export class UsersService {
    private users:User[]=[
        {
            username:"Udara",
            password:"Nuwan"
        },
        {
            username:"Nuwan",
            password:"Nuwan18"
        },
];

getUsers(){
    // return this.users;
    return this.users.map((user)=>plainToClass(SerializeUser,user))
}

getUserByUsername(username:string){
    return this.users.find((user)=>user.username===username)
}
}
