/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "./schemas/user.schema";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: 'users', schema: UserSchema }])],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService] //exporta UserService para importar no AuthModule
})

export class UserModule {}