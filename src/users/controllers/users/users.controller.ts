import { ClassSerializerInterceptor, Controller, Get, HttpException, HttpStatus, Inject, Param, UseInterceptors } from '@nestjs/common';
import { UsersService } from '../../services/users/users.service';
import { SerializeUser } from 'src/users/types/User';

@Controller('users')
export class UsersController {
    constructor(
        @Inject('USER_SERVICE') 
        private readonly userService : UsersService
    ) {}

    @Get('')
    getUsers(){
        return this.userService.getUsers()
    }
    
    @UseInterceptors(ClassSerializerInterceptor)
    @Get(':username')
    getByUsername(@Param('username') username:string){
        const user= this.userService.getUserByUsername(username);
        // if(user) return user;
        if(user) return new SerializeUser(user);
        else
            throw new HttpException('User Not Found',HttpStatus.BAD_REQUEST)
    }

}
