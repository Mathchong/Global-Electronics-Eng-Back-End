import bcrypt from "bcrypt";

export function encrypt(data: string){
    return bcrypt.hashSync(data, 10)
}