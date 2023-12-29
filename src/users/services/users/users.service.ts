import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { User as UserEntity } from 'src/typeorm';
import { CreateUserDto } from 'src/users/dto/createUser.dto';
import { SerializeUser, User } from 'src/users/types/User';
import { encodePassword } from 'src/utils/bcrypt';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(UserEntity) private readonly userRepository:Repository<UserEntity>){

    }
    private users:User[]=[
        {
            id:1,
            username:"Udara",
            password:"Nuwan"
        },
        {
            id:2,
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

getUserById(id:number){
    return this.users.find((user)=>user.id===id)
}

createUser(createUserDto:CreateUserDto)
{
    // console.log(createUserDto)
    const password=encodePassword(createUserDto.password)
    console.log("password===>>",password)
    const newUser=this.userRepository.create({...createUserDto,password})
    return this.userRepository.save(newUser)
}

findUserByUsername(username:string)
{
    return this.userRepository.findOneBy({ username })
}

findUserById(id:number){
    return this.userRepository.findOneBy({id})
}

}
