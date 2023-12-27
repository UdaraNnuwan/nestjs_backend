import { Body, ClassSerializerInterceptor, Controller, Get, HttpException, HttpStatus, Inject, NotFoundException, Param, ParseIntPipe, Post, UseFilters, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from '../../services/users/users.service';
import { SerializeUser } from 'src/users/types/User';
import { UserNotFoundException } from 'src/users/exceptions/UserNotFound.exception';
import { HttpExceptionFilter } from 'src/users/filters/HttpExceprion.filter';
import { CreateUserDto } from 'src/users/dto/createUser.dto';

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

    @UseInterceptors(ClassSerializerInterceptor)
    @UseFilters(HttpExceptionFilter)
    @Get('id/:id')
    getUserById(@Param('id' , ParseIntPipe) id:number){
        const user= this.userService.getUserById(id);
        // if(user) return user;
        if(user) return new SerializeUser(user);
        else
            // throw new UserNotFoundException()
            throw new UserNotFoundException("User was Not found",404)
            // throw new NotFoundException
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    createUser(@Body() createUserDto:CreateUserDto)
    {
      const newUser=this.userService.createUser(createUserDto)
      return newUser;
    }

}
