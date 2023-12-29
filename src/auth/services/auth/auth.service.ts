import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { comparePasswords } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {

    constructor(@Inject('USER_SERVICE') private readonly userService:UsersService){

    }

    async validateUser(username:string, password:string)
    {
        const userDB= await this.userService.findUserByUsername(username)

        // if(userDB && userDB.password==password){
        //    return userDB
        // }
        if(userDB){
            const comparePassword=comparePasswords(userDB.password,password)
            if(comparePassword){
                console.log("Password Matchde")
                return userDB
            }else{
                console.log("Password Not Match")
                return null
            }
         }
        else{
            console.log("Validation Failed")
            return false;
        }
    }

}
