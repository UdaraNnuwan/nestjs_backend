import { Controller, Get, Post, Req, Session, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { AuthenticatedGuard, LocalAuthGuards } from 'src/auth/utils/LocalGuards';

@Controller('auth')
export class AuthController {
    // @UseGuards(AuthGuard('local'))
    @UseGuards(LocalAuthGuards)
    @Post('login')
    // async login(@Request() req){

    // }
    async login(){

    }
    @Get('')
    async getAuthSession(@Session() session:Record<string,any>){
        console.log(session)
        console.log(session.id)
        session.authenticated=true
        return session
    }
    // @UseGuards(LocalAuthGuards)
    @UseGuards(AuthenticatedGuard)
    @Get('status')
    async getAuthStatus(@Req() req:Request) {
        return  req.user;
    }
}
