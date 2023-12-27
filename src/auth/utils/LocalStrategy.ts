import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "../services/auth/auth.service";
import { Strategy } from "passport-local";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(@Inject('AUTH_SERVICE') private readonly authService:AuthService)
    {
        // super({
        //     usernameField:"email",
        // });
        super()
    } 

    async validate(username:string, password:string)
    {
        console.log("inside Local Stratergy")
        const user=this.authService.validateUser(username,password)
        if(!user)
        {
            throw new UnauthorizedException()
        }
        else
        {
            return user
        }
    }
}