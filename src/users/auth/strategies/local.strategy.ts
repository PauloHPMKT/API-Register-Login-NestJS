/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({ usermail: 'email' })
    }

    validate( usermail: string, password: string ) {
        return this.authService.validateUser(usermail, password)
    }
} 