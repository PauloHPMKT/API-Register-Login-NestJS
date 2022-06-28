/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { EncondePass } from "../helpers";
import { UserService } from "../user.service";

@Injectable()
export class AuthService {

    constructor(private readonly userService: UserService) {}

    async validateUser(usermail: string, password: string) {
        const user = await this.userService.findByEmail(usermail)

        if(user) {
            //chekar se a senha informada corresponde a hash do banco de dados
            const isPasswordValue = user.password = await EncondePass.ComparePass(password, user.password)
        
            if(isPasswordValue) {
                return {
                    ...user, //capta todos os dados do usuario
                    password: undefined, //remove a senha
                }
            }
        }

        //não encontrou usuario ou a senha nao corresponde
        throw new Error('Email address or password provided is incorrect')
    }
}