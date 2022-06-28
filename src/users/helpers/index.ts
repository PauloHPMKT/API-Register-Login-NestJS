/* eslint-disable prettier/prettier */
import * as bcrypt from 'bcrypt'


export class EncondePass {
    static async EncoderPassword(pass) {
        const salt = await bcrypt.genSalt()
        const hash = await bcrypt.hash(pass, salt)

        return hash
    }

    static async ComparePass(pass, userPass) {
        return await bcrypt.compare(pass, userPass)
    }
}