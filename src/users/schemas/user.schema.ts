/* eslint-disable prettier/prettier */
import * as mongoose from "mongoose"

export const UserSchema = new mongoose.Schema({
    username: String,
    usermail: String,
    password: String,
})