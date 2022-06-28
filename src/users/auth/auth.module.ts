/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common"
import { UserModule } from "../user.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./strategies/local.strategy";

@Module({
    imports: [UserModule], // importar o modulo inteiro disponibiliza todos os providers onde é recebido
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy],
})

export class AuthModule {}