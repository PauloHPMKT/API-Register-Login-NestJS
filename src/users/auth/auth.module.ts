/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common"
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./strategies/local.strategy";

@Module({
    imports: [],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy],
})

export class AuthModule {}